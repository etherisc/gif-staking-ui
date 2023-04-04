/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { USD1, USD1Interface } from "../USD1";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "LogUsd1Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "LogUsd1TransferFrom",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
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
    name: "INITIAL_SUPPLY",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252601081526f55534420436f696e202d2044554d4d5960801b6020808301918252835180850190945260048452635553444360e01b908401528151919291620000669160039162000196565b5080516200007c90600490602084019062000196565b505050620000a462000093620000aa60201b60201c565b69d3c21bcecceda1000000620000ae565b6200029e565b3390565b6001600160a01b038216620001095760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200011d91906200023c565b90915550506001600160a01b038216600090815260208190526040812080548392906200014c9084906200023c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001a49062000261565b90600052602060002090601f016020900481019282620001c8576000855562000213565b82601f10620001e357805160ff191683800117855562000213565b8280016001018555821562000213579182015b8281111562000213578251825591602001919060010190620001f6565b506200022192915062000225565b5090565b5b8082111562000221576000815560010162000226565b600082198211156200025c57634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610a1580620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80633950935111610097578063a457c2d711610066578063a457c2d7146101ef578063a9059cbb14610202578063dd62ed3e14610215578063f76f8d7814610228576100f5565b8063395093511461019257806370a08231146101a557806395d89b41146101b8578063a3f4df7e146101c0576100f5565b806323b872dd116100d357806323b872dd1461014d5780632e0f2625146101605780632ff2e9dc1461017a578063313ce5671461018b576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261024b565b60405161010f919061092d565b60405180910390f35b61012b610126366004610904565b6102dd565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b3660046108c9565b6102f5565b610168600681565b60405160ff909116815260200161010f565b61013f69d3c21bcecceda100000081565b6006610168565b61012b6101a0366004610904565b610362565b61013f6101b3366004610876565b610384565b6101026103a3565b6101026040518060400160405280601081526020016f55534420436f696e202d2044554d4d5960801b81525081565b61012b6101fd366004610904565b6103b2565b61012b610210366004610904565b61043d565b61013f610223366004610897565b6104a1565b610102604051806040016040528060048152602001635553444360e01b81525081565b60606003805461025a906109a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610286906109a4565b80156102d35780601f106102a8576101008083540402835291602001916102d3565b820191906000526020600020905b8154815290600101906020018083116102b657829003601f168201915b5050505050905090565b6000336102eb8185856104cc565b5060019392505050565b604080516001600160a01b038086168252841660208201529081018290524260608201524360808201526000907fbebbf968ce34a42435040695b1cae18b56e2b2592359e5bf161f2f6993caa9bc9060a00160405180910390a161035a8484846105f0565b949350505050565b6000336102eb81858561037583836104a1565b61037f9190610980565b6104cc565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461025a906109a4565b600033816103c082866104a1565b9050838110156104255760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61043282868684036104cc565b506001949350505050565b60408051338082526001600160a01b03851660208301528183018490524260608301524360808301529151600092917fbebbf968ce34a42435040695b1cae18b56e2b2592359e5bf161f2f6993caa9bc919081900360a00190a161035a8484610609565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661052e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161041c565b6001600160a01b03821661058f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161041c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000336105fe858285610617565b610432858585610691565b6000336102eb818585610691565b600061062384846104a1565b9050600019811461068b578181101561067e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161041c565b61068b84848484036104cc565b50505050565b6001600160a01b0383166106f55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161041c565b6001600160a01b0382166107575760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161041c565b6001600160a01b038316600090815260208190526040902054818110156107cf5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161041c565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610806908490610980565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161085291815260200190565b60405180910390a361068b565b80356001600160a01b038116811461039e57600080fd5b600060208284031215610887578081fd5b6108908261085f565b9392505050565b600080604083850312156108a9578081fd5b6108b28361085f565b91506108c06020840161085f565b90509250929050565b6000806000606084860312156108dd578081fd5b6108e68461085f565b92506108f46020850161085f565b9150604084013590509250925092565b60008060408385031215610916578182fd5b61091f8361085f565b946020939093013593505050565b6000602080835283518082850152825b818110156109595785810183015185820160400152820161093d565b8181111561096a5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561099f57634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806109b857607f821691505b602082108114156109d957634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a6af7cb9e0ac72efba9fa49d4eb3a989adbf52f3a29effedbc11d0b8403b805d64736f6c63430008020033";

type USD1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USD1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USD1__factory extends ContractFactory {
  constructor(...args: USD1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USD1> {
    return super.deploy(overrides || {}) as Promise<USD1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): USD1 {
    return super.attach(address) as USD1;
  }
  override connect(signer: Signer): USD1__factory {
    return super.connect(signer) as USD1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USD1Interface {
    return new utils.Interface(_abi) as USD1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USD1 {
    return new Contract(address, _abi, signerOrProvider) as USD1;
  }
}
