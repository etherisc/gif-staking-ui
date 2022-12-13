import { BigNumber, ethers, Signer } from "ethers";
import { OptionsObject, SnackbarKey, SnackbarMessage } from "notistack";
import { BundleInfo } from "./bundle_info";
import stakingApiMock from "./staking_api_mock";

export interface StakingApi {

    currency(): string;
    currencyDecimals(): number;
    minStakedAmount(): BigNumber;
    maxStakedAmount(): BigNumber;
    retrieveBundles: (
        bundleRetrieved: ((bundle: BundleInfo) => Promise<void>),
        loadingFinished: () => void,
    ) => Promise<void>;
    calculateSupportedAmount: (
        amount: BigNumber,
        bundle: BundleInfo,
    ) => Promise<BigNumber>;
    createTreasuryApproval: (
        walletAddress: string, 
        amount: BigNumber,
        beforeApprovalCallback?: (address: string, currency: string, amount: BigNumber) => void,
        beforeWaitCallback?: (address: string, currency: string, amount: BigNumber) => void
    ) => Promise<boolean>;
    stake: (
        instanceId: string, 
        number: number, 
        stakedAmount: BigNumber,
        beforeTrxCallback?: (address: string) => void,
        beforeWaitCallback?: (address: string) => void
    ) => Promise<boolean>;
}

export function getStakingApi(
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey, 
    t: (key: string) => string,
    signer?: Signer,
    provider?: ethers.providers.Provider
    ): StakingApi {

    const stakingContractAddress = process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS;
    if (stakingContractAddress == null) {
        console.log("Using mock staking API");
        return stakingApiMock(enqueueSnackbar);
    } else {
        console.log("Using smart contract @", stakingContractAddress);
        // let api: InsuranceApiSmartContract;
        // if (signer === undefined || provider === undefined) {
        //     api = new InsuranceApiSmartContract(new ethers.VoidSigner(depegProductContractAddress, provider), depegProductContractAddress);
        // } else {
        //     api = new InsuranceApiSmartContract(signer, depegProductContractAddress);
        // }
        // return api;
        // TODO: implement
        return stakingApiMock(enqueueSnackbar);
    }
}