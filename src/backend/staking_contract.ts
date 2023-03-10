import { BigNumber, ContractReceipt, ContractTransaction, Signer } from "ethers";
import { formatEther } from "ethers/lib/utils";
import moment from "moment";
import { IChainRegistry, IChainRegistry__factory, IERC20Metadata__factory, IERC721EnumerableUpgradeable, IERC721EnumerableUpgradeable__factory, IStaking, IStaking__factory } from "../contracts/registry-contracts";
import { add, addAmountToMyStakes, addNftId, clearNftIds } from "../redux/slices/stakes";
import { store } from "../redux/store";
import { TransactionFailedError } from "../utils/error";
import { BundleInfo } from "./bundle_info";

/** get from https://github.com/etherisc/registry-contracts/blob/develop/contracts/registry/ChainRegistryV01.sol#L27 */
const OBJECT_TYPE_UNDEFINED = 0;
const OBJECT_TYPE_PROTOCOL = 1;
const OBJECT_TYPE_CHAIN = 2;
const OBJECT_TYPE_REGISTRY = 3;
const OBJECT_TYPE_TOKEN = 4;
const OBJECT_TYPE_STAKE = 10;
const OBJECT_TYPE_INSTANCE = 20;
const OBJECT_TYPE_PRODUCT = 21;
const OBJECT_TYPE_ORACLE = 22;
const OBJECT_TYPE_RISKPOOL = 23;
const OBJECT_TYPE_POLICY = 30;
const OBJECT_TYPE_BUNDLE = 40;


export default class StakingContract {
    private signer: Signer;
    private walletAddress: string = "";
    private staking: IStaking;
    private chainRegistry?: IChainRegistry;
    private chainNft?: IERC721EnumerableUpgradeable;
    private knownTokens: Map<string, [string, number]> = new Map();
    private chainId: number = 0;
    private chainIdB32: string = "";
    
    constructor(signer: Signer, stakingContractAddress: string) {
        this.signer = signer;
        this.staking = IStaking__factory.connect(stakingContractAddress, signer);
    }

    async initialize(): Promise<void> {
        const registryAddress = await this.staking.getRegistry();
        this.chainRegistry = IChainRegistry__factory.connect(registryAddress, this.signer);
        this.chainNft = IERC721EnumerableUpgradeable__factory.connect(registryAddress, this.signer);
        this.chainId = await this.signer.getChainId();
        this.chainIdB32 = await this.chainRegistry.toChain(this.chainId);
        this.walletAddress = await this.signer.getAddress();
    }

    async getAllInstanceInfos() {
        console.log("getAllInstanceInfos", this.chainIdB32);
        const instanceInfos = [];
        const numInstances = await this.chainRegistry!.objects(this.chainIdB32, OBJECT_TYPE_INSTANCE);
        console.log("numInstances", numInstances.toNumber());
        // loop over instances and get instance id
        for (let i = 0; i < numInstances.toNumber(); i++) {
            const nftId = await this.chainRegistry!["getNftId(bytes5,uint8,uint256)"](this.chainIdB32, OBJECT_TYPE_INSTANCE, i);
            const { instanceId, registry, displayName } = await this.chainRegistry!.decodeInstanceData(nftId);
            instanceInfos.push({ instanceId , displayName, chainId: this.chainId!, registry, nftId});
        }
        return instanceInfos;
    }

    async getToken(tokenAddress: string): Promise<[string, number]> {
        if (this.knownTokens.has(tokenAddress)) {
            return this.knownTokens.get(tokenAddress)!;
        }
        const token = IERC20Metadata__factory.connect(tokenAddress, this.signer);
        const [name, decimals] = await Promise.all([token.symbol(), token.decimals()]);
        this.knownTokens.set(tokenAddress, [name, decimals]);
        return [name, decimals];
    }

    async getBundleNftIds(): Promise<Array<BigNumber>> {
        const bundlesNftIds = [];
        // console.log("instance", instanceId);
        const numBundles = await this.chainRegistry!.objects(this.chainIdB32, OBJECT_TYPE_BUNDLE);
        console.log("numBundles", numBundles.toNumber());
        for (let idx = 0; idx < numBundles.toNumber(); idx++) {
            console.log("idx", idx);
            const nftId = await this.chainRegistry!["getNftId(bytes5,uint8,uint256)"](this.chainIdB32, OBJECT_TYPE_BUNDLE, idx);
            bundlesNftIds.push(nftId);
        }
        return bundlesNftIds;
    }

    /**
     * Get bundle details (except amount staked by current wallet)
     * @param bundleNftId 
     * @param instanceId 
     * @param instanceName 
     * @param chainId 
     * @param registry 
     * @returns 
     */
    async getBundleInfo(bundleNftId: BigNumber, instanceId: string, instanceName: string, chainId: number, registry: string): Promise<BundleInfo> {
        console.log("decodeBundleData");
        const { token } = await this.chainRegistry!.decodeBundleData(bundleNftId);
        console.log("getBundleInfo", bundleNftId.toNumber());
        const { riskpoolId, bundleId, displayName, bundleState, expiryAt } = await this.staking!.getBundleInfo(bundleNftId);

        const stakedAmount = await this.staking!.stakes(bundleNftId);
        let myStakedAmount = BigNumber.from(0);
        const supportedAmount = await this.calculateSupportedAmount(stakedAmount, token);
        let mySupportingAmount = BigNumber.from(0);
        const [tokenSymbol, tokenDecimals] = await this.getToken(token);

        const stakingSupported = await this.staking!.isStakingSupported(bundleNftId);
        const unstakingSupported = await this.staking!.isUnstakingSupported(bundleNftId);

        return {
            id: `${instanceId}-${bundleId}`,
            chainId: chainId,
            instanceId: instanceId,
            instanceName: instanceName,
            registry: registry,
            riskpoolId: riskpoolId.toNumber(),
            bundleId: bundleId.toNumber(),
            bundleName: displayName,
            nftId: bundleNftId.toString(),
            token: token,
            myStakedAmount: myStakedAmount.toString(),
            myStakedNfsIds: [],
            stakedAmount: stakedAmount.toString(),
            mySupportingAmount: mySupportingAmount.toString(),
            supportingAmount: supportedAmount.toString(),
            supportingToken: tokenSymbol,
            supportingTokenDecimals: tokenDecimals,
            state: bundleState,
            expiryAt: expiryAt,
            stakingSupported: stakingSupported,
            unstakingSupported: unstakingSupported,
            lockedAmount: undefined,
            stakeUsage: undefined,
            policies: 0,
        } as BundleInfo;
    }

    /**
     * Fetch all bundles from the blockchain and add them to the redux store
     */
    async fetchBundles(): Promise<void> {
        const instanceInfos = await this.getAllInstanceInfos();
        const dispatch = store.dispatch;
        const bundles = [];

        // loop over instances and get bundles
        for (const instanceInfo of instanceInfos) {
            const instanceId = instanceInfo.instanceId;
            const bundleNftIds = await this.getBundleNftIds();

            for (const bundleNftId of bundleNftIds) {
                const bundleInfo = await this.getBundleInfo(bundleNftId, instanceId, instanceInfo.displayName, instanceInfo.chainId, instanceInfo.registry);
                console.log("bundleInfo", bundleInfo);
                dispatch(add(bundleInfo));
                bundles.push(bundleInfo);
            }
        }

        dispatch(clearNftIds());
        const bundleStakeNftIds = await this.getBundleStakeNfts(this.walletAddress);
        console.log("bundleStakeNftIds of this wallet", bundleStakeNftIds.map(nftId => nftId.toNumber()));
        for (const nftId of bundleStakeNftIds) {
            const { target, stakeBalance } = await this.staking!.getInfo(nftId);
            const bundleInfo = bundles.find(bundle => bundle.nftId === target.toString());
            const supportingAmount = await this.calculateSupportedAmount(stakeBalance, bundleInfo!.token); 
            console.log("bundleStakeNftIds", nftId.toNumber(), target.toString(), formatEther(stakeBalance));
            dispatch(addAmountToMyStakes({ 
                stakeNftId: nftId.toString(), 
                target: target.toString(), 
                amount: stakeBalance.toString(), 
                supportingAmount: supportingAmount.toString()
            }));
            dispatch(addNftId({ nftId: nftId.toString(), stakedAmount: stakeBalance.toString(), targetNftId: target.toString()}));
        }
    }

    async updateBundle(bundle: BundleInfo): Promise<void> {
        const dispatch = store.dispatch;
        const bundleInfo = await this.getBundleInfo(BigNumber.from(bundle.nftId), bundle.instanceId, bundle.instanceName, this.chainId, bundle.registry);
        console.log("bundleInfo", bundleInfo);
        dispatch(add(bundleInfo));
        
        const bundleStakeNftIds = await this.getBundleStakeNfts(this.walletAddress);
        console.log("bundleStakeNftIds of this wallet", bundleStakeNftIds.map(nftId => nftId.toNumber()));
        for (const nftId of bundleStakeNftIds) {
            const { target, stakeBalance } = await this.staking!.getInfo(nftId);
            console.log("bundleStakeNftIds", nftId.toNumber(), target.toString(), formatEther(stakeBalance));
            const supportingAmount = await this.calculateSupportedAmount(stakeBalance, bundle.token); 
            dispatch(addAmountToMyStakes({ 
                stakeNftId: nftId.toString(), 
                target: target.toString(), 
                amount: stakeBalance.toString(), 
                supportingAmount: supportingAmount.toString()
            }));
            dispatch(addNftId({ nftId: nftId.toString(), stakedAmount: stakeBalance.toString(), targetNftId: target.toString()}));
        }
    }

    async calculateSupportedAmount(
        dipAmount: BigNumber, 
        token: string
    ): Promise<BigNumber> {
        const s = await this.staking.calculateCapitalSupport(this.chainIdB32, token, dipAmount);
        // console.log("calculateSupportedAmount", s.toString());
        return s;
    }

    async calculateReward(amount: BigNumber, bundle: BundleInfo): Promise<BigNumber> {
        const duration = moment.unix(bundle.expiryAt).diff(moment(), "seconds");
        // console.log("calculateReward", amount.toString(), bundle.expiryAt, duration);
        return await this.staking.calculateRewards(amount, duration);
    }

    /**
     * Find all NFT IDs of bundle stake NFTs that belong to the given address
     * @param walletAddress 
     * @returns 
     */
    async getBundleStakeNfts(address: string): Promise<Array<BigNumber>> {
        const bundleStakeNftIds = [];
        const nftBalance = await this.chainNft?.balanceOf(address) || BigNumber.from(0);
        for (let idx = 0; idx < nftBalance.toNumber(); idx++) {
            const nftId = await this.chainNft?.tokenOfOwnerByIndex(address, idx);
            const { t: objectType } = await this.chainRegistry!.getNftInfo(nftId!);
            if (objectType === OBJECT_TYPE_STAKE) {
                bundleStakeNftIds.push(nftId!);
            }
        }
        return bundleStakeNftIds;
    }

    /**
     * Find all stake nfts in current wallet that stake the given target nft. 
     * 
     * @param targetNftId the NFT ID of the target
     * @returns 
     */
    async findAllStakeNfts(targetNftId: BigNumber): Promise<Array<BigNumber>> {
        const stakeNftIds = [];
        const bundleStakeNftIds = await this.getBundleStakeNfts(this.walletAddress);
        for (const stakeNftId of bundleStakeNftIds) {
            const { target } = await this.staking!.getInfo(stakeNftId);
            if (target.eq(targetNftId)) {
                stakeNftIds.push(stakeNftId);
            }
        }
        return stakeNftIds;
    }

    async stake(
        bundle: BundleInfo,
        stakedAmount: BigNumber, 
        beforeTrxCallback?: ((address: string) => void) | undefined, 
        beforeWaitCallback?: ((address: string) => void) | undefined
    ): Promise<[ContractTransaction, ContractReceipt]> {
        if (beforeTrxCallback !== undefined) {
            beforeTrxCallback(this.staking.address);
        }
        try {
            console.log("stake", bundle, formatEther(stakedAmount));
            const stakeNftIds = await this.findAllStakeNfts(BigNumber.from(bundle.nftId));
            let tx;
            if (stakeNftIds.length > 0) {
                // stake onto existing nft
                console.log("staking existing nft", stakeNftIds[0]);
                tx = await this.staking.stake(stakeNftIds[0], stakedAmount);
            } else {
                // new stake nft created during tx
                console.log("no nft exists, creating new");
                tx = await this.staking.createStake(bundle.nftId, stakedAmount);
            }

            if (beforeWaitCallback !== undefined) {
                beforeWaitCallback(this.staking.address);
            }

            const receipt = await tx.wait();
            // console.log(receipt);

            // if a new stake was created (stakeNftIds.length === 0), then extract the nft id from the receipt
            if (stakeNftIds.length === 0) {
                console.log(receipt.events);
                const event = receipt.events?.find(e => e.event === "LogStakingNewStake");
                if (event !== undefined) {
                    console.log(event);
                    const stakeNftId = event.args?.id;
                    if (stakeNftId === undefined) {
                        throw new Error("stake nft id not found in receipt");
                    }
                    console.log("new stake created", stakeNftId?.toString());
                    store.dispatch(addNftId(stakeNftId));
                }
            }

            return [tx, receipt];
        } catch (e) {
            console.log("caught error while staking: ", e);
            // @ts-ignore e.code
            throw new TransactionFailedError(e.code, e);
        }
    }

    async unstake(
        bundle: BundleInfo,
        nftId: string,
        unstakeAmount?: BigNumber, 
        beforeTrxCallback?: ((address: string) => void) | undefined, 
        beforeWaitCallback?: ((address: string) => void) | undefined
    ): Promise<[ContractTransaction, ContractReceipt]> {
        console.log("unstake", bundle, unstakeAmount?.toString());
        if (beforeTrxCallback !== undefined) {
            beforeTrxCallback(this.staking.address);
        }
        try {
            let tx;

            const bundleStakeNftId = BigNumber.from(nftId);
            console.log("unstaking from nft", bundleStakeNftId.toNumber());
            if (unstakeAmount === undefined) {
                tx = await this.staking.unstakeAndClaimRewards(bundleStakeNftId);
            } else {
                tx = await this.staking.unstake(bundleStakeNftId, unstakeAmount);
            }

            if (beforeWaitCallback !== undefined) {
                beforeWaitCallback(this.staking.address);
            }
            const receipt = await tx.wait();
            // console.log(receipt);
            return [tx, receipt];
        } catch (e) {
            console.log("caught error while unstaking: ", e);
            // @ts-ignore e.code
            throw new TransactionFailedError(e.code, e);
        }
    }

    async getRewardRate(): Promise<number> {
        const rewardRateRaw = await this.staking.rewardRate();
        const rateDecimals = await (await this.staking.rateDecimals()).toNumber();  // 18
        console.log(rateDecimals);
        // ethers bignumber doesn't handle fractionals, thats why we need to do this manually
        // 42000000000000000 * 10000 --> 42r0000000000000000000
        // 420000000000000000000 / 10^18 --> 42000
        // 42000 / 10000 --> 4.2
        const rate = rewardRateRaw.mul(10000).div(BigNumber.from(10).pow(rateDecimals));
        return rate.toNumber() / 10000;
    }

    async getStakingWallet(): Promise<string> {
        return await this.staking.getStakingWallet();
    }

    async claimRewards(bundle: BundleInfo,
        beforeTrxCallback?: ((address: string) => void) | undefined, 
        beforeWaitCallback?: ((address: string) => void) | undefined
    ): Promise<[ContractTransaction, ContractReceipt]> {
        console.log("claimRewards", bundle);
        if (beforeTrxCallback !== undefined) {
            beforeTrxCallback(this.staking.address);
        }
        try {
            let tx;

            const bundleStakeNftId = BigNumber.from(bundle.myStakedNfsIds[0]);
            console.log("unstaking from nft", bundleStakeNftId.toNumber());
            tx = await this.staking.claimRewards(bundleStakeNftId);
            
            if (beforeWaitCallback !== undefined) {
                beforeWaitCallback(this.staking.address);
            }
            const receipt = await tx.wait();
            // console.log(receipt);
            return [tx, receipt];
        } catch (e) {
            console.log("caught error while unstaking: ", e);
            // @ts-ignore e.code
            throw new TransactionFailedError(e.code, e);
        }
    }

}
