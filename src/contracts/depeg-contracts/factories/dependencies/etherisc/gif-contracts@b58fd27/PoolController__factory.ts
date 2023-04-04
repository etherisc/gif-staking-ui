/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PoolController,
  PoolControllerInterface,
} from "../../../../dependencies/etherisc/gif-contracts@b58fd27/PoolController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogRiskpoolCollateralReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogRiskpoolCollateralizationFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogRiskpoolCollateralizationSucceeded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralizationLevel",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sumOfSumInsuredCap",
        type: "uint256",
      },
    ],
    name: "LogRiskpoolRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sumInsured",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
    ],
    name: "LogRiskpoolRequiredCollateral",
    type: "event",
  },
  {
    inputs: [],
    name: "COLLATERALIZATION_LEVEL_CAP",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_MAX_NUMBER_OF_ACTIVE_BUNDLES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FULL_COLLATERALIZATION_LEVEL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
    ],
    name: "activeBundles",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfActiveBundles",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bundleId",
        type: "uint256",
      },
    ],
    name: "addBundleIdToActiveSet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sumInsuredAmount",
        type: "uint256",
      },
    ],
    name: "calculateCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "defund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bundleIdx",
        type: "uint256",
      },
    ],
    name: "getActiveBundleId",
    outputs: [
      {
        internalType: "uint256",
        name: "bundleId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFullCollateralizationLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
    ],
    name: "getMaximumNumberOfActiveBundles",
    outputs: [
      {
        internalType: "uint256",
        name: "maximumNumberOfActiveBundles",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
    ],
    name: "getRiskPoolForProduct",
    outputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
    ],
    name: "getRiskpool",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "address",
            name: "erc20Token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "collateralizationLevel",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sumOfSumInsuredCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sumOfSumInsuredAtRisk",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "capital",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockedCapital",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
        ],
        internalType: "struct IPool.Pool",
        name: "riskPool",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "processPayout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "processPremium",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "erc20Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralizationLevel",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sumOfSumInsuredCap",
        type: "uint256",
      },
    ],
    name: "registerRiskpool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bundleId",
        type: "uint256",
      },
    ],
    name: "removeBundleIdFromActiveSet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "riskpools",
    outputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxNumberOfActiveBundles",
        type: "uint256",
      },
    ],
    name: "setMaximumNumberOfActiveBundles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
    ],
    name: "setRiskpoolForProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "processId",
        type: "bytes32",
      },
    ],
    name: "underwrite",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001c62000022565b620000e4565b600054610100900460ff16156200008f5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e2576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b612b3c80620000f46000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063a65e2cfd116100c3578063eb8021141161007c578063eb802114146102ad578063ec833b0c146102cd578063edb5be30146102e0578063f1d354d0146102e8578063f93b3673146102f6578063fe64372b146103095761014d565b8063a65e2cfd14610239578063c397ae391461024c578063c4d66de81461025f578063d229f3b014610272578063d407ba0014610292578063da68771a146102a55761014d565b806367d42a8b1161011557806367d42a8b146101d25780637cdb808d146101e55780637db32844146101f8578063950be8031461020b578063a054381f1461021e578063a4266a66146102265761014d565b806302108268146101525780631b07b17f146101675780632127fd481461018f57806345fe1c6d146101a257806357419e8f146101bf575b600080fd5b610165610160366004612679565b61031c565b005b61017a610175366004612661565b6104ea565b60405190151581526020015b60405180910390f35b61016561019d3660046128bb565b610a5c565b6101b1670de0b6b3a764000081565b604051908152602001610186565b6101656101cd36600461286a565b610b24565b6101656101e0366004612661565b610e71565b6101b16101f33660046128bb565b611242565b6101b1610206366004612661565b6112a2565b6101656102193660046128bb565b6112b7565b6007546101b1565b6101b1610234366004612661565b61138e565b6101656102473660046128bb565b6113ab565b61016561025a3660046128bb565b611444565b61016561026d366004612609565b6114e3565b6101b1610280366004612661565b60009081526003602052604090205490565b6101656102a03660046128bb565b611661565b6101b16117c7565b6102c06102bb366004612661565b6117dd565b6040516101869190612987565b6101b16102db3660046128bb565b611942565b6101b1600181565b670de0b6b3a76400006101b1565b6101656103043660046128bb565b6119d1565b610165610317366004612679565b611c6f565b63141bdbdb60e21b61032d81611fcf565b6001600160a01b0316306001600160a01b0316146103665760405162461bcd60e51b815260040161035d9061290f565b60405180910390fd5b6103806d50726f647563745365727669636560901b611fcf565b6001600160a01b0316336001600160a01b0316146103b05760405162461bcd60e51b815260040161035d90612946565b60095460405163296586d360e21b8152600481018590526000916001600160a01b03169063a5961b4c9060240160006040518083038186803b1580156103f557600080fd5b505afa158015610409573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104319190810190612767565b9050600061043e826120b7565b604051630d8a70f160e21b815260048101879052602481018690529091506001600160a01b03821690633629c3c490604401600060405180830381600087803b15801561048a57600080fd5b505af115801561049e573d6000803e3d6000fd5b5050505060208281015160009081526003825260408082205480835260049093528120600881018054919288926104d6908490612a54565b909155505042600a90910155505050505050565b600063141bdbdb60e21b6104fd81611fcf565b6001600160a01b0316306001600160a01b03161461052d5760405162461bcd60e51b815260040161035d9061290f565b6105476d50726f647563745365727669636560901b611fcf565b6001600160a01b0316336001600160a01b0316146105775760405162461bcd60e51b815260040161035d90612946565b600954604051632f141bd960e21b8152600481018590526000916001600160a01b03169063bc506f649060240160006040518083038186803b1580156105bc57600080fd5b505afa1580156105d0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105f891908101906126b9565b905060008151600381111561061d57634e487b7160e01b600052602160045260246000fd5b1461067a5760405162461bcd60e51b815260206004820152602760248201527f4552524f523a504f4c2d3032303a4150504c49434154494f4e5f53544154455f6044820152661253959053125160ca1b606482015260840161035d565b60095460405163296586d360e21b8152600481018690526000916001600160a01b03169063a5961b4c9060240160006040518083038186803b1580156106bf57600080fd5b505afa1580156106d3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106fb9190810190612767565b60208082015160009081526003918290526040902054919250600854604051635e966e4560e01b8152600481018490526001600160a01b0390911690635e966e459060240160206040518083038186803b15801561075857600080fd5b505afa15801561076c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610790919061269a565b60068111156107af57634e487b7160e01b600052602160045260246000fd5b146108065760405162461bcd60e51b815260206004820152602160248201527f4552524f523a504f4c2d3032313a5249534b504f4f4c5f4e4f545f41435449566044820152604560f81b606482015260840161035d565b604083015160006108178383611242565b60008981526002602090815260409182902083905581518b81529081018590529081018290529091507f893c64de8e253703b31297be336c07a93e39fe8eaa32127e2e6fff090f0aefae9060600160405180910390a16000838152600460205260409020600581015461088b908490612a54565b816004015410156108f65760405162461bcd60e51b815260206004820152602f60248201527f4552524f523a504f4c2d3032323a5249534b504f4f4c5f53554d5f494e53555260448201526e115117d0d05417d15610d151511151608a1b606482015260840161035d565b6000610901866120b7565b604051631121f7ef60e31b8152600481018c9052602481018590529091506001600160a01b0382169063890fbf7890604401602060405180830381600087803b15801561094d57600080fd5b505af1158015610961573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109859190612641565b98508815610a0d57838260050160008282546109a19190612a54565b92505081905550828260070160008282546109bc9190612a54565b909155505042600a83015560408051868152602081018c90529081018590527f66a2033a32603d30bde9ec2b858820c3202972f4ee1c8dd2c6e18391b6bfbaeb9060600160405180910390a1610a4f565b60408051868152602081018c90529081018590527fc6e314ad1256dc0c682dc6bb53e940b53f14aa323070798a8423a7f1d965d0599060600160405180910390a15b5050505050505050919050565b610a776e5269736b706f6f6c5365727669636560881b611fcf565b6001600160a01b0316336001600160a01b031614610aa75760405162461bcd60e51b815260040161035d906128cd565b60008111610b125760405162461bcd60e51b815260206004820152603260248201527f4552524f523a504f4c2d3033323a4d41585f4e554d4245525f4f465f41435449604482015271159157d0955391131154d7d253959053125160721b606482015260840161035d565b60009182526005602052604090912055565b610b3f6e5269736b706f6f6c5365727669636560881b611fcf565b6001600160a01b0316336001600160a01b031614610b6f5760405162461bcd60e51b815260040161035d906128cd565b60008581526004602090815260408083206007805460018082019092557fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688018a90556005909352922055600981015415610c1d5760405162461bcd60e51b815260206004820152602960248201527f4552524f523a504f4c2d3030343a5249534b504f4f4c5f414c52454144595f526044820152681151d254d51154915160ba1b606482015260840161035d565b6001600160a01b038516610c7d5760405162461bcd60e51b815260206004820152602160248201527f4552524f523a504f4c2d3030353a57414c4c45545f414444524553535f5a45526044820152604f60f81b606482015260840161035d565b6001600160a01b038416610cd35760405162461bcd60e51b815260206004820181905260248201527f4552524f523a504f4c2d3030363a45524332305f414444524553535f5a45524f604482015260640161035d565b610ce6670de0b6b3a76400006002612a8c565b831115610d4c5760405162461bcd60e51b815260206004820152602e60248201527f4552524f523a504f4c2d3030373a434f4c4c41544552414c495a4154494f4e5f60448201526d0d88aac8ad8bea89e9ebe90928e960931b606482015260840161035d565b60008211610dae5760405162461bcd60e51b815260206004820152602960248201527f4552524f523a504f4c2d3030383a53554d5f4f465f53554d5f494e53555245446044820152685f4341505f5a45524f60b81b606482015260840161035d565b8581556001810180546001600160a01b038781166001600160a01b031992831681179093556002840180549188169190921681179091556003830185905560048301849055600060058401819055600684018190556007840181905560088401554260098401819055600a84015560408051898152602081019390935282015260608101849052608081018390527f798f4ae5a0a1e2125e89cf9f810639cd05f69896db5bd4f928bd53e6ef3bf8b99060a00160405180910390a1505050505050565b63141bdbdb60e21b610e8281611fcf565b6001600160a01b0316306001600160a01b031614610eb25760405162461bcd60e51b815260040161035d9061290f565b610ecc6d50726f647563745365727669636560901b611fcf565b6001600160a01b0316336001600160a01b031614610efc5760405162461bcd60e51b815260040161035d90612946565b60095460405163a3f685f960e01b8152600481018490526000916001600160a01b03169063a3f685f9906024016101206040518083038186803b158015610f4257600080fd5b505afa158015610f56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7a91906127e5565b9050600281516002811115610f9f57634e487b7160e01b600052602160045260246000fd5b14610ff75760405162461bcd60e51b815260206004820152602260248201527f4552524f523a504f4c2d3032353a504f4c4943595f53544154455f494e56414c604482015261125160f21b606482015260840161035d565b60095460405163296586d360e21b8152600481018590526000916001600160a01b03169063a5961b4c9060240160006040518083038186803b15801561103c57600080fd5b505afa158015611050573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110789190810190612767565b90506000611085826120b7565b604051636180264360e11b8152600481018790529091506001600160a01b0382169063c3004c8690602401600060405180830381600087803b1580156110ca57600080fd5b505af11580156110de573d6000803e3d6000fd5b5050600954604051632f141bd960e21b815260048101899052600093506001600160a01b03909116915063bc506f649060240160006040518083038186803b15801561112957600080fd5b505afa15801561113d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261116591908101906126b9565b6020808501516000908152600382526040808220548083526004845281832060c08a01518c85526002909552918320549495509390926111a491612aab565b905083604001518260050160008282546111be9190612aab565b92505081905550808260070160008282546111d99190612aab565b909155505042600a83015560008981526002602090815260408083209290925581518581529081018b90529081018290527f4948a5a8dbd6a1190cb403d7731211af859364368aafe64e104d3f3b07e846cf9060600160405180910390a1505050505050505050565b60008061124e846117dd565b606001519050670de0b6b3a764000081141561126c5782915061129b565b801561129657670de0b6b3a76400006112858483612a8c565b61128f9190612a6c565b915061129b565b600091505b5092915050565b6000818152600560205260409020545b919050565b6112d26e5269736b706f6f6c5365727669636560881b611fcf565b6001600160a01b0316336001600160a01b0316146113025760405162461bcd60e51b815260040161035d906128cd565b600082815260066020526040902061131a9082612130565b6113715760405162461bcd60e51b815260206004820152602260248201527f4552524f523a504f4c2d3034343a42554e444c455f49445f4e4f545f494e5f53604482015261115560f21b606482015260840161035d565b60008281526006602052604090206113899082612148565b505050565b60008181526006602052604081206113a590612154565b92915050565b6113c66e5269736b706f6f6c5365727669636560881b611fcf565b6001600160a01b0316336001600160a01b0316146113f65760405162461bcd60e51b815260040161035d906128cd565b600082815260046020526040812060068101805491928492611419908490612a54565b92505081905550818160080160008282546114349190612a54565b909155505042600a909101555050565b61145f6e5269736b706f6f6c5365727669636560881b611fcf565b6001600160a01b0316336001600160a01b03161461148f5760405162461bcd60e51b815260040161035d906128cd565b6000828152600460205260409020600681015482116114c757818160060160008282546114bc9190612aab565b909155506114cf9050565b600060068201555b818160080160008282546114349190612aab565b600054610100900460ff16158080156115035750600054600160ff909116105b8061151d5750303b15801561151d575060005460ff166001145b6115805760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161035d565b6000805460ff1916600117905580156115a3576000805461ff0019166101001790555b6000805462010000600160b01b031916620100006001600160a01b038516021790556115cd600090565b6541636365737360d01b1461160f576115ee6541636365737360d01b611fcf565b600180546001600160a01b0319166001600160a01b03929092169190911790555b61161761215e565b801561165d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b61167c6e5269736b706f6f6c5365727669636560881b611fcf565b6001600160a01b0316336001600160a01b0316146116ac5760405162461bcd60e51b815260040161035d906128cd565b60008281526006602052604090206116c49082612130565b156117205760405162461bcd60e51b815260206004820152602660248201527f4552524f523a504f4c2d3034323a42554e444c455f49445f414c52454144595f604482015265125397d4d15560d21b606482015260840161035d565b600082815260056020908152604080832054600690925290912061174390612154565b106117af5760405162461bcd60e51b815260206004820152603660248201527f4552524f523a504f4c2d3034333a4d4158494d554d5f4e554d4245525f4f465f6044820152751050d512559157d0955391131154d7d4915050d2115160521b606482015260840161035d565b60008281526006602052604090206113899082612264565b6117da670de0b6b3a76400006002612a8c565b81565b61184c6040518061016001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b506000818152600460208181526040928390208351610160810185528154815260018201546001600160a01b039081169382019390935260028201549092169382019390935260038301546060820152908201546080820152600582015460a0820152600682015460c0820152600782015460e0820152600882015461010082015260098201546101208201819052600a90920154610140820152906112b25760405162461bcd60e51b815260206004820152602560248201527f4552524f523a504f4c2d3034303a5249534b504f4f4c5f4e4f545f5245474953604482015264151154915160da1b606482015260840161035d565b600082815260066020526040812061195990612154565b82106119b25760405162461bcd60e51b815260206004820152602260248201527f4552524f523a504f4c2d3034313a42554e444c455f4944585f544f4f5f4c4152604482015261474560f01b606482015260840161035d565b60008381526006602052604090206119ca9083612270565b9392505050565b6119fa7f496e7374616e63654f70657261746f7253657276696365000000000000000000611fcf565b6001600160a01b0316336001600160a01b031614611a665760405162461bcd60e51b815260206004820152602360248201527f4552524f523a504f4c2d3030313a4e4f545f494e5354414e43455f4f504552416044820152622a27a960e91b606482015260840161035d565b600854604051630e48080360e21b8152600481018490526001600160a01b0390911690633920200c9060240160206040518083038186803b158015611aaa57600080fd5b505afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae29190612641565b611b2e5760405162461bcd60e51b815260206004820152601960248201527f4552524f523a504f4c2d3031303a4e4f545f50524f4455435400000000000000604482015260640161035d565b60085460405163ba80b8ed60e01b8152600481018390526001600160a01b039091169063ba80b8ed9060240160206040518083038186803b158015611b7257600080fd5b505afa158015611b86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611baa9190612641565b611bf65760405162461bcd60e51b815260206004820152601a60248201527f4552524f523a504f4c2d3031313a4e4f545f5249534b504f4f4c000000000000604482015260640161035d565b60008281526003602052604090205415611c5d5760405162461bcd60e51b815260206004820152602260248201527f4552524f523a504f4c2d3031323a5249534b504f4f4c5f414c52454144595f53604482015261115560f21b606482015260840161035d565b60009182526003602052604090912055565b63141bdbdb60e21b611c8081611fcf565b6001600160a01b0316306001600160a01b031614611cb05760405162461bcd60e51b815260040161035d9061290f565b611cca6d50726f647563745365727669636560901b611fcf565b6001600160a01b0316336001600160a01b031614611cfa5760405162461bcd60e51b815260040161035d90612946565b60095460405163296586d360e21b8152600481018590526000916001600160a01b03169063a5961b4c9060240160006040518083038186803b158015611d3f57600080fd5b505afa158015611d53573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611d7b9190810190612767565b6020808201516000908152600382526040808220548083526004909352902060098101549293509091611dfa5760405162461bcd60e51b815260206004820152602160248201527f4552524f523a504f4c2d3032363a5249534b504f4f4c5f49445f494e56414c496044820152601160fa1b606482015260840161035d565b8481600601541015611e4e5760405162461bcd60e51b815260206004820152601d60248201527f4552524f523a504f4c2d3032373a4341504954414c5f544f4f5f4c4f57000000604482015260640161035d565b8481600701541015611eae5760405162461bcd60e51b8152602060048201526024808201527f4552524f523a504f4c2d3032383a4c4f434b45445f4341504954414c5f544f4f6044820152635f4c4f5760e01b606482015260840161035d565b8481600801541015611f025760405162461bcd60e51b815260206004820152601d60248201527f4552524f523a504f4c2d3032393a42414c414e43455f544f4f5f4c4f57000000604482015260640161035d565b84816006016000828254611f169190612aab565b9250508190555084816007016000828254611f319190612aab565b9250508190555084816008016000828254611f4c9190612aab565b909155505042600a8201556000611f62846120b7565b60405163412ac48360e11b815260048101899052602481018890529091506001600160a01b03821690638255890690604401600060405180830381600087803b158015611fae57600080fd5b505af1158015611fc2573d6000803e3d6000fd5b5050505050505050505050565b60008054604051631c2d8fb360e31b815260048101849052620100009091046001600160a01b03169063e16c7d989060240160206040518083038186803b15801561201957600080fd5b505afa15801561202d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120519190612625565b90506001600160a01b0381166112b25760405162461bcd60e51b815260206004820152602560248201527f4552524f523a4352432d3030343a434f4e54524143545f4e4f545f5245474953604482015264151154915160da1b606482015260840161035d565b602080820151600090815260039091526040812054806121275760405162461bcd60e51b815260206004820152602560248201527f4552524f523a504f4c2d3034353a5249534b504f4f4c5f444f45535f4e4f545f60448201526411561254d560da1b606482015260840161035d565b6119ca8161227c565b600081815260018301602052604081205415156119ca565b60006119ca83836123ce565b60006113a5825490565b600054610100900460ff166121c95760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161035d565b6121de6810dbdb5c1bdb995b9d60ba1b611fcf565b600880546001600160a01b0319166001600160a01b039290921691909117905561221065506f6c69637960d01b611fcf565b600980546001600160a01b0319166001600160a01b03929092169190911790556122426542756e646c6560d01b611fcf565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b60006119ca83836124eb565b60006119ca838361253a565b60085460405163ba80b8ed60e01b8152600481018390526000916001600160a01b03169063ba80b8ed9060240160206040518083038186803b1580156122c157600080fd5b505afa1580156122d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f99190612641565b6123515760405162461bcd60e51b8152602060048201526024808201527f4552524f523a504f4c2d3034363a434f4d504f4e454e545f4e4f545f5249534b6044820152631413d3d360e21b606482015260840161035d565b6008546040516309e4fb4360e31b8152600481018490526000916001600160a01b031690634f27da189060240160206040518083038186803b15801561239657600080fd5b505afa1580156123aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ca9190612625565b600081815260018301602052604081205480156124e15760006123f2600183612aab565b855490915060009061240690600190612aab565b905081811461248757600086600001828154811061243457634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061246557634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806124a657634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506113a5565b60009150506113a5565b6000818152600183016020526040812054612532575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556113a5565b5060006113a5565b600082600001828154811061255f57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b600082601f830112612582578081fd5b815167ffffffffffffffff81111561259c5761259c612ad8565b60206125b0601f8301601f19168201612a23565b82815285828487010111156125c3578384fd5b835b838110156125e05785810183015182820184015282016125c5565b838111156125f057848385840101525b5095945050505050565b8051600381106112b257600080fd5b60006020828403121561261a578081fd5b81356119ca81612aee565b600060208284031215612636578081fd5b81516119ca81612aee565b600060208284031215612652578081fd5b815180151581146119ca578182fd5b600060208284031215612672578081fd5b5035919050565b6000806040838503121561268b578081fd5b50508035926020909101359150565b6000602082840312156126ab578081fd5b8151600781106119ca578182fd5b6000602082840312156126ca578081fd5b815167ffffffffffffffff808211156126e1578283fd5b9083019060c082860312156126f4578283fd5b6126fe60c0612a23565b82516004811061270c578485fd5b808252506020830151602082015260408301516040820152606083015182811115612735578485fd5b61274187828601612572565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b600060208284031215612778578081fd5b815167ffffffffffffffff8082111561278f578283fd5b9083019060c082860312156127a2578283fd5b6127ac60c0612a23565b82516127b781612aee565b8152602083810151908201526127cf604084016125fa565b6040820152606083015182811115612735578485fd5b60006101208083850312156127f8578182fd5b61280181612a23565b905061280c836125fa565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600080600080600060a08688031215612881578081fd5b85359450602086013561289381612aee565b935060408601356128a381612aee565b94979396509394606081013594506080013592915050565b6000806040838503121561268b578182fd5b60208082526022908201527f4552524f523a504f4c2d3030323a4e4f545f5249534b504f4f4c5f5345525649604082015261434560f01b606082015260800190565b6020808252601c908201527f4552524f523a4352432d3030323a4e4f545f4f4e5f53544f5241474500000000604082015260600190565b60208082526021908201527f4552524f523a4352432d3030333a4e4f545f50524f445543545f5345525649436040820152604560f81b606082015260800190565b815181526020808301516101608301916129ab908401826001600160a01b03169052565b5060408301516129c660408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b604051601f8201601f1916810167ffffffffffffffff81118282101715612a4c57612a4c612ad8565b604052919050565b60008219821115612a6757612a67612ac2565b500190565b600082612a8757634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612aa657612aa6612ac2565b500290565b600082821015612abd57612abd612ac2565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114612b0357600080fd5b5056fea264697066735822122086fa145fe2e2160c2c2b2e3b4f8505192ca39ab0c71d28a3485f8fd0160c9e1d64736f6c63430008020033";

type PoolControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolController__factory extends ContractFactory {
  constructor(...args: PoolControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PoolController> {
    return super.deploy(overrides || {}) as Promise<PoolController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PoolController {
    return super.attach(address) as PoolController;
  }
  override connect(signer: Signer): PoolController__factory {
    return super.connect(signer) as PoolController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolControllerInterface {
    return new utils.Interface(_abi) as PoolControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolController {
    return new Contract(address, _abi, signerOrProvider) as PoolController;
  }
}
