/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MockRegistryStaking,
  MockRegistryStakingInterface,
} from "../MockRegistryStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dipAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdtAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes5",
        name: "chain",
        type: "bytes5",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "objectType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bundleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "LogMockBundleRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "BUNDLE",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CHAIN",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXP",
    outputs: [
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSTANCE",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MULTIPLIER",
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
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORACLE",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POLICY",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRODUCT",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGISTRY",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RISKPOOL",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKE",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SYMBOL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOKEN",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDEFINED",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targetNftId",
        type: "uint256",
      },
    ],
    name: "capitalSupport",
    outputs: [
      {
        internalType: "uint256",
        name: "capitalAmount",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "bundleId",
        type: "uint256",
      },
    ],
    name: "getBundleNftId",
    outputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "componentId",
        type: "uint256",
      },
    ],
    name: "getComponentNftId",
    outputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDip",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
    ],
    name: "getInstanceNftId",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNft",
    outputs: [
      {
        internalType: "contract IChainNftFacade",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRegistry",
    outputs: [
      {
        internalType: "contract IChainRegistryFacade",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakingWallet",
    outputs: [
      {
        internalType: "address",
        name: "stakingWallet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementsIStaking",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "riskpoolId",
        type: "uint256",
      },
    ],
    name: "mockRegisterRiskpool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes5",
        name: "chain",
        type: "bytes5",
      },
      {
        internalType: "uint8",
        name: "objectType",
        type: "uint8",
      },
    ],
    name: "objects",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfObjects",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rateDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
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
      {
        internalType: "string",
        name: "displayName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expiryAt",
        type: "uint256",
      },
    ],
    name: "registerBundle",
    outputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "dipAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "dipAmount",
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
        name: "targetNftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dipAmount",
        type: "uint256",
      },
    ],
    name: "setStakedDip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes5",
        name: "chain",
        type: "bytes5",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setStakingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes5",
        name: "chain",
        type: "bytes5",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "stakingRate",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "toChain",
    outputs: [
      {
        internalType: "bytes5",
        name: "chain",
        type: "bytes5",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "int8",
        name: "exp",
        type: "int8",
      },
    ],
    name: "toRate",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001534380380620015348339810160408190526200003491620002f7565b60088054336001600160a01b031991821617909155600f805482166001600160a01b0385811691909117909155601080549092169083161790554660098190556200007f906200015a565b600a805464ffffffffff191660d89290921c919091179055600954620000a59062000165565b600b819055620000b790600a620003fd565b600c556002600d819055620000cc9062000194565b50620000d9600362000194565b50620000e6600462000194565b50620000f3600462000194565b5062000103607d60021962000204565b600655600a54620001529060d81b8262000121600160001962000204565b6001600160d81b031990921660009081526007602090815260408083206001600160a01b0390941683529290522055565b505062000550565b60d881901b5b919050565b60005b81156200016057806200017b816200051c565b91506200018c9050600a836200038f565b915062000168565b6000620001b730604051806020016040528060008152506200021960201b60201c565b600a5460d81b6001600160d81b03191660009081526020818152604080832060ff8716845290915281208054929350600192909190620001f990849062000374565b909155509092915050565b60006200021283836200025c565b9392505050565b60006200022562000284565b6000818152600460205260408120805460ff19166001179055600e80549293509062000251836200051c565b919050555092915050565b60006200026b8260126200032e565b6200027890600a6200040e565b620002129084620004fa565b6000600b54600954600c54600d546200029e9190620004fa565b620002aa919062000374565b620002b7906064620004fa565b620002c3919062000374565b600d80549192506000620002d7836200051c565b919050555090565b80516001600160a01b03811681146200016057600080fd5b600080604083850312156200030a578182fd5b6200031583620002df565b91506200032560208401620002df565b90509250929050565b600081810b83820b82821282607f038213811516156200035257620003526200053a565b82607f190382128116156200036b576200036b6200053a565b50019392505050565b600082198211156200038a576200038a6200053a565b500190565b600082620003ab57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611620003c45750620003f4565b818704821115620003d957620003d96200053a565b80861615620003e757918102915b9490941c938002620003b3565b94509492505050565b60006200021260001984846200041d565b60006200021260001960ff8516845b6000826200042e5750600162000212565b816200043d5750600062000212565b8160018114620004565760028114620004615762000495565b600191505062000212565b60ff8411156200047557620004756200053a565b6001841b9150848211156200048e576200048e6200053a565b5062000212565b5060208310610133831016604e8410600b8410161715620004cd575081810a83811115620004c757620004c76200053a565b62000212565b620004dc8484846001620003b0565b808604821115620004f157620004f16200053a565b02949350505050565b60008160001904831182151516156200051757620005176200053a565b500290565b60006000198214156200053357620005336200053a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b610fd480620005606000396000f3fe608060405234801561001057600080fd5b506004361061025e5760003560e01c80637b0a47ee11610146578063b3fc986e116100c3578063d15db8b411610087578063d15db8b414610531578063d91fc8c714610539578063dadbccee14610564578063f0de822814610479578063f76f8d781461056c578063fc1cd6cc1461058f5761025e565b8063b3fc986e146103cd578063b54ded6e146104b3578063c0759d0d146104c4578063d044a1ed146104e4578063d0def5211461051e5761025e565b8063a3f4df7e1161010a578063a3f4df7e14610471578063aa5c3ab414610479578063ac513fb8146103cd578063adc2fc7514610480578063afb9128e146104885761025e565b80637b0a47ee1461042857806382bfefc8146104305780638da5cb5b1461043857806395d89b4114610449578063a2309ff8146104695761025e565b806325425a91116101df57806353bed7c3116101a357806353bed7c3146103c55780635ab1bd53146103cd5780635b1cfdbd146103e75780635c3d18ea146103fa5780635ce4193b1461040d5780636e5668f8146104155761025e565b806325425a911461034b57806338013f02146103535780633e1e56381461035b57806343ee82131461039a5780634f558e79146103a25761025e565b8063178156ca11610226578063178156ca146102c85780631a12cd47146102f45780631a3480b51461030f5780631b08829c146103165780631be627b6146103295761025e565b8063059f8b161461026357806306433b1b1461027e57806306fdde03146102985780630dd4d811146102ad578063125fdbbc146102c0575b600080fd5b61026b6105a2565b6040519081526020015b60405180910390f35b610286600381565b60405160ff9091168152602001610275565b6102a06105b1565b6040516102759190610cc3565b61026b6102bb366004610bdc565b6105d1565b610286600a81565b6102db6102d6366004610b43565b610606565b6040516001600160d81b03199091168152602001610275565b6102fc601281565b60405160009190910b8152602001610275565b601261026b565b60015b6040519015158152602001610275565b610349610337366004610b5b565b60009182526005602052604090912055565b005b610286601581565b610286601681565b610349610369366004610c0e565b6001600160d81b031990921660009081526007602090815260408083206001600160a01b0390941683529290522055565b610286600281565b6103196103b0366004610b43565b60009081526004602052604090205460ff1690565b610286602881565b305b6040516001600160a01b039091168152602001610275565b61026b6103f5366004610b7c565b610611565b610349610408366004610b5b565b610696565b610286601781565b61026b610423366004610b43565b6106af565b60065461026b565b610286600481565b6008546001600160a01b03166103cf565b6040805180820190915260048152632224a82960e11b60208201526102a0565b600e5461026b565b6102a061082e565b600061026b565b610286600081565b61026b610496366004610b5b565b600091825260036020908152604080842092845291905290205490565b600f546001600160a01b03166103cf565b61026b6104d2366004610b43565b60009081526001602052604090205490565b61026b6104f2366004610c49565b6001600160d81b0319821660009081526020818152604080832060ff8516845290915290205492915050565b61026b61052c366004610af7565b61084a565b610286601481565b61026b610547366004610b5b565b600091825260026020908152604080842092845291905290205490565b610286601e81565b6102a0604051806040016040528060048152602001632224a82960e11b81525081565b61026b61059d366004610c7f565b610889565b6105ae6012600a610dd4565b81565b6060604051806060016040528060308152602001610f6f60309139905090565b6001600160d81b0319821660009081526007602090815260408083206001600160a01b03851684529091529020545b92915050565b60d881901b5b919050565b600061061d868661089c565b600a546040805183815260d89290921b6001600160d81b0319166020830152602890820152606081018890526080810187905260a081018690523360c08201529091507fdb4150958a3752b909c33b3c176ca2cd153a25c70b496347d7f110be32eb47f09060e00160405180910390a195945050505050565b61069f826108e8565b506106aa828261091c565b505050565b600081815260056020908152604080832054600a5460d81b6001600160d81b0319168452600783528184206010546001600160a01b031680865290845282852054835163313ce56760e01b8152935192949093869363313ce56792600480840193919291829003018186803b15801561072757600080fd5b505afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f9190610ca7565b90506000600f60009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156107b157600080fd5b505afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e99190610ca7565b9050600083610801866107fc8587610ed4565b610968565b61080b9190610eb5565b90506108196012600a610dd4565b6108239082610d6e565b979650505050505050565b604051806060016040528060308152602001610f6f6030913981565b600061085461098a565b6000818152600460205260408120805460ff19166001179055600e80549293509061087e83610f15565b919050555092915050565b60006108958383610968565b9392505050565b600082815260036020908152604080832084845290915290205480610600576108c560286109db565b600093845260036020908152604080862094865293905291909220819055919050565b6000818152600160205260409020548061060c5761090660146109db565b6000928352600160205260409092208290555090565b6000828152600260209081526040808320848452909152902054806106005761094560176109db565b600093845260026020908152604080862094865293905291909220819055919050565b6000610975826012610d16565b61098090600a610de3565b6108959084610eb5565b6000600b54600954600c54600d546109a29190610eb5565b6109ac9190610d56565b6109b7906064610eb5565b6109c19190610d56565b600d805491925060006109d383610f15565b919050555090565b60006109f6306040518060200160405280600081525061084a565b600a5460d81b6001600160d81b03191660009081526020818152604080832060ff8716845290915281208054929350600192909190610a36908490610d56565b909155509092915050565b80356001600160a01b038116811461060c57600080fd5b80356001600160d81b03198116811461060c57600080fd5b600082601f830112610a80578081fd5b813567ffffffffffffffff80821115610a9b57610a9b610f46565b604051601f8301601f19908116603f01168101908282118183101715610ac357610ac3610f46565b81604052838152866020858801011115610adb578485fd5b8360208701602083013792830160200193909352509392505050565b60008060408385031215610b09578182fd5b610b1283610a41565b9150602083013567ffffffffffffffff811115610b2d578182fd5b610b3985828601610a70565b9150509250929050565b600060208284031215610b54578081fd5b5035919050565b60008060408385031215610b6d578182fd5b50508035926020909101359150565b600080600080600060a08688031215610b93578081fd5b853594506020860135935060408601359250606086013567ffffffffffffffff811115610bbe578182fd5b610bca88828901610a70565b95989497509295608001359392505050565b60008060408385031215610bee578182fd5b610bf783610a58565b9150610c0560208401610a41565b90509250929050565b600080600060608486031215610c22578283fd5b610c2b84610a58565b9250610c3960208501610a41565b9150604084013590509250925092565b60008060408385031215610c5b578182fd5b610c6483610a58565b91506020830135610c7481610f5c565b809150509250929050565b60008060408385031215610c91578182fd5b82359150602083013580820b8114610c74578182fd5b600060208284031215610cb8578081fd5b815161089581610f5c565b6000602080835283518082850152825b81811015610cef57858101830151858201604001528201610cd3565b81811115610d005783604083870101525b50601f01601f1916929092016040019392505050565b600081810b83820b82821282607f03821381151615610d3757610d37610f30565b82607f19038212811615610d4d57610d4d610f30565b50019392505050565b60008219821115610d6957610d69610f30565b500190565b600082610d8957634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611610da05750610dcb565b818704821115610db257610db2610f30565b80861615610dbf57918102915b9490941c938002610d91565b94509492505050565b60006108956000198484610df1565b600061089560001960ff8516845b600082610e0057506001610895565b81610e0d57506000610895565b8160018114610e235760028114610e2d57610e5a565b6001915050610895565b60ff841115610e3e57610e3e610f30565b6001841b915084821115610e5457610e54610f30565b50610895565b5060208310610133831016604e8410600b8410161715610e8d575081810a83811115610e8857610e88610f30565b610895565b610e9a8484846001610d8e565b808604821115610eac57610eac610f30565b02949350505050565b6000816000190483118215151615610ecf57610ecf610f30565b500290565b600081810b83820b8281128015607f19830184121615610ef657610ef6610f30565b81607f018313811615610f0b57610f0b610f30565b5090039392505050565b6000600019821415610f2957610f29610f30565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60ff81168114610f6b57600080fd5b5056fe44657a656e7472616c697a656420496e737572616e63652050726f746f636f6c20526567697374727920284d4f434b29a2646970667358221220a70b64bef149ee8bde0895bdc17bbd5a358354a8d879f1392616b5e52732366d64736f6c63430008020033";

type MockRegistryStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRegistryStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRegistryStaking__factory extends ContractFactory {
  constructor(...args: MockRegistryStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dipAddress: PromiseOrValue<string>,
    usdtAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockRegistryStaking> {
    return super.deploy(
      dipAddress,
      usdtAddress,
      overrides || {}
    ) as Promise<MockRegistryStaking>;
  }
  override getDeployTransaction(
    dipAddress: PromiseOrValue<string>,
    usdtAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(dipAddress, usdtAddress, overrides || {});
  }
  override attach(address: string): MockRegistryStaking {
    return super.attach(address) as MockRegistryStaking;
  }
  override connect(signer: Signer): MockRegistryStaking__factory {
    return super.connect(signer) as MockRegistryStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRegistryStakingInterface {
    return new utils.Interface(_abi) as MockRegistryStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRegistryStaking {
    return new Contract(address, _abi, signerOrProvider) as MockRegistryStaking;
  }
}
