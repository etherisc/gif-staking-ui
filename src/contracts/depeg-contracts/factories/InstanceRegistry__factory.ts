/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  InstanceRegistry,
  InstanceRegistryInterface,
} from "../InstanceRegistry";

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
        indexed: false,
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "oldDisplayName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newDisplayName",
        type: "string",
      },
    ],
    name: "LogInstanceRegistryInstanceDisplayNameUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum IInstanceDataProvider.InstanceState",
        name: "state",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isNewInstance",
        type: "bool",
      },
    ],
    name: "LogInstanceRegistryInstanceRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum IInstanceDataProvider.InstanceState",
        name: "oldState",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum IInstanceDataProvider.InstanceState",
        name: "newState",
        type: "uint8",
      },
    ],
    name: "LogInstanceRegistryInstanceStateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IInstanceDataProvider.TokenState",
        name: "state",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isNewToken",
        type: "bool",
      },
    ],
    name: "LogInstanceRegistryTokenRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IInstanceDataProvider.TokenState",
        name: "oldState",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum IInstanceDataProvider.TokenState",
        name: "newState",
        type: "uint8",
      },
    ],
    name: "LogInstanceRegistryTokenStateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "TOKEN_MAX_DECIMALS",
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
        name: "idx",
        type: "uint256",
      },
    ],
    name: "getInstanceId",
    outputs: [
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
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
    name: "getInstanceInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
          {
            internalType: "enum IInstanceDataProvider.InstanceState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "displayName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "registry",
            type: "address",
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
        internalType: "struct IInstanceDataProvider.InstanceInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "getTokenId",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
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
        name: "token",
        type: "address",
      },
    ],
    name: "getTokenInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct IInstanceDataProvider.TokenKey",
            name: "key",
            type: "tuple",
          },
          {
            internalType: "enum IInstanceDataProvider.TokenState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
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
        internalType: "struct IInstanceDataProvider.TokenInfo",
        name: "tokenInfo",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "getTokenInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
            ],
            internalType: "struct IInstanceDataProvider.TokenKey",
            name: "key",
            type: "tuple",
          },
          {
            internalType: "enum IInstanceDataProvider.TokenState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
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
        internalType: "struct IInstanceDataProvider.TokenInfo",
        name: "tokenInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "instances",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfInstances",
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
    ],
    name: "isRegisteredInstance",
    outputs: [
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "isRegisteredToken",
    outputs: [
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "isRegisteredToken",
    outputs: [
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
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
    inputs: [
      {
        internalType: "address",
        name: "registryAddress",
        type: "address",
      },
    ],
    name: "probeInstance",
    outputs: [
      {
        internalType: "bool",
        name: "isContract",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "contractSize",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isValidId",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "instanceId",
        type: "bytes32",
      },
      {
        internalType: "contract IInstanceService",
        name: "instanceService",
        type: "address",
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
    name: "registerInstance",
    outputs: [],
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
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "registerInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "registerToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "registerToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokens",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
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
        internalType: "string",
        name: "newDisplayName",
        type: "string",
      },
    ],
    name: "updateInstance",
    outputs: [],
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
        internalType: "enum IInstanceDataProvider.InstanceState",
        name: "newState",
        type: "uint8",
      },
    ],
    name: "updateInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "enum IInstanceDataProvider.TokenState",
        name: "newState",
        type: "uint8",
      },
    ],
    name: "updateToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6122c08061007e6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063834af153116100b8578063ad6b6b011161007c578063ad6b6b01146102f9578063b23c748d14610319578063b8f6a04a14610366578063bbd7d2091461036e578063e6c6b46d14610381578063f2fde38b1461039457610142565b8063834af153146102755780638da5cb5b146102885780639d63848a146102a3578063a5b78c51146102ab578063aa25929c146102be57610142565b80633ec29e721161010a5780633ec29e72146101e95780634d2ace66146101fc5780634e8f0ea01461020e578063715018a614610221578063724140d8146102295780637639a2301461023c57610142565b80630857aef71461014757806309824a801461016f5780630c36b7971461018457806314ff5ea3146101975780631f69565f146101c9575b600080fd5b61015a610155366004611d26565b6103a7565b60405190151581526020015b60405180910390f35b61018261017d366004611ba1565b6103c1565b005b610182610192366004611c04565b6104c2565b6101aa6101a5366004611d26565b6106b8565b604080516001600160a01b039093168352602083019190915201610166565b6101dc6101d7366004611ba1565b610793565b6040516101669190612107565b6101826101f7366004611d88565b6107ab565b6003545b604051908152602001610166565b61020061021c366004611d26565b610958565b6101826109ee565b610182610237366004611c48565b610a02565b61015a61024a366004611ba1565b6001600160a01b03166000908152600160209081526040808320468452909152902060050154151590565b610182610283366004611ba1565b610a3e565b6000546040516001600160a01b039091168152602001610166565b600454610200565b6101826102b9366004611dcd565b610ace565b61015a6102cc366004611bd9565b6001600160a01b039190911660009081526001602090815260408083209383529290522060050154151590565b61030c610307366004611d26565b610b08565b6040516101669190612091565b61032c610327366004611ba1565b610d18565b60405161016695949392919094151585526020850193909352901515604084015260608301526001600160a01b0316608082015260a00190565b610200601281565b6101dc61037c366004611bd9565b610e82565b61018261038f366004611d56565b61107d565b6101826103a2366004611ba1565b61121e565b60008181526002602052604090206005015415155b919050565b6103c9611297565b60008190506104be8246836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561040c57600080fd5b505afa158015610420573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104449190611e6d565b846001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561047d57600080fd5b505afa158015610491573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104b99190810190611dfa565b6112f1565b5050565b604051632a8964a760e21b81526001600160a01b03841660048201526024810183905283908390309063aa25929c9060440160206040518083038186803b15801561050c57600080fd5b505afa158015610520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105449190611cb2565b6105695760405162461bcd60e51b81526004016105609061200a565b60405180910390fd5b610571611297565b600083600281111561059357634e487b7160e01b600052602160045260246000fd5b14156105eb5760405162461bcd60e51b815260206004820152602160248201527f4552524f523a4952472d3031313a544f4b454e5f53544154455f494e56414c496044820152601160fa1b6064820152608401610560565b6001600160a01b03851660009081526001602081815260408084208885529091529091206002908101805460ff811693879360ff1990921691849081111561064357634e487b7160e01b600052602160045260246000fd5b02179055506001600160a01b03861660009081526001602090815260408083208884529091529081902042600690910155517fe4938f3efa93c37f967db34630b38efbe64d48ecd48a9d8d95c50b82df24be28906106a8908890889085908990611f0e565b60405180910390a1505050505050565b600454600090819083106107185760405162461bcd60e51b815260206004820152602160248201527f4552524f523a4952472d3035303a544f4b454e5f4944585f544f4f5f4c4152476044820152604560f81b6064820152608401610560565b6004838154811061073957634e487b7160e01b600052603260045260246000fd5b6000918252602090912060029091020154600480546001600160a01b03909216918590811061077857634e487b7160e01b600052603260045260246000fd5b90600052602060002090600202016001015491509150915091565b61079b611a5c565b6107a58246610e82565b92915050565b604051630857aef760e01b81526004810183905282903090630857aef79060240160206040518083038186803b1580156107e457600080fd5b505afa1580156107f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081c9190611cb2565b6108385760405162461bcd60e51b81526004016105609061204c565b610840611297565b6000838152600260208190526040822001805461085c90612205565b80601f016020809104026020016040519081016040528092919081815260200182805461088890612205565b80156108d55780601f106108aa576101008083540402835291602001916108d5565b820191906000526020600020905b8154815290600101906020018083116108b857829003601f168201915b5050506000878152600260208181526040909220885195965061090095910193509087019150611aa7565b506000848152600260205260409081902042600690910155517f711a15f2221deba7f1f0eb3049b4fa3a9e9bde57837a465fe70dd4536f02b5879061094a90869084908790611f8c565b60405180910390a150505050565b60035460009082106109bb5760405162461bcd60e51b815260206004820152602660248201527f4552524f523a4952472d3034303a494e5354414e43455f494e4445585f544f4f6044820152655f4c4152474560d01b6064820152608401610560565b600382815481106109dc57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b6109f6611297565b610a00600061159b565b565b610a0a611297565b8246811415610a2b5760405162461bcd60e51b815260040161056090611fc1565b610a37858585856112f1565b5050505050565b610a46611297565b6000610a51826115eb565b90506104be816001600160a01b0316631551100f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8f57600080fd5b505afa158015610aa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac79190611d3e565b468461172d565b8146811415610aef5760405162461bcd60e51b815260040161056090611fc1565b610af7611297565b610b0284848461172d565b50505050565b610b526040805160e08101909152600080825260208201908152602001606081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b604051630857aef760e01b81526004810183905282903090630857aef79060240160206040518083038186803b158015610b8b57600080fd5b505afa158015610b9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc39190611cb2565b610bdf5760405162461bcd60e51b81526004016105609061204c565b600083815260026020908152604091829020825160e08101909352805483526001810154909183019060ff166003811115610c2a57634e487b7160e01b600052602160045260246000fd5b6003811115610c4957634e487b7160e01b600052602160045260246000fd5b8152602001600282018054610c5d90612205565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8990612205565b8015610cd65780601f10610cab57610100808354040283529160200191610cd6565b820191906000526020600020905b815481529060010190602001808311610cb957829003601f168201915b50505091835250506003820154602082015260048201546001600160a01b03166040820152600582015460608201526006909101546080909101529392505050565b803b80158015919060009081908190610e7957604051631c2d8fb360e31b81526e496e7374616e63655365727669636560881b600482015286906001600160a01b0382169063e16c7d989060240160206040518083038186803b158015610d7e57600080fd5b505afa925050508015610dae575060408051601f3d908101601f19168201909252610dab91810190611bbd565b60015b610db757610e77565b809250826001600160a01b0316631551100f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610df357600080fd5b505afa158015610e07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2b9190611d3e565b93504682604051602001610e5b92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b6040516020818303038152906040528051906020012084149450505b505b91939590929450565b610e8a611a5c565b604051632a8964a760e21b81526001600160a01b03841660048201526024810183905283908390309063aa25929c9060440160206040518083038186803b158015610ed457600080fd5b505afa158015610ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0c9190611cb2565b610f285760405162461bcd60e51b81526004016105609061200a565b6001600160a01b03808616600090815260016020818152604080842089855282529283902083516101008101909452805490941660c084019081529184015460e08401529082526002808401549293929184019160ff1690811115610f9d57634e487b7160e01b600052602160045260246000fd5b6002811115610fbc57634e487b7160e01b600052602160045260246000fd5b8152602001600382018054610fd090612205565b80601f0160208091040260200160405190810160405280929190818152602001828054610ffc90612205565b80156110495780601f1061101e57610100808354040283529160200191611049565b820191906000526020600020905b81548152906001019060200180831161102c57829003601f168201915b5050509183525050600482015460ff1660208201526005820154604082015260069091015460609091015295945050505050565b604051630857aef760e01b81526004810183905282903090630857aef79060240160206040518083038186803b1580156110b657600080fd5b505afa1580156110ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ee9190611cb2565b61110a5760405162461bcd60e51b81526004016105609061204c565b611112611297565b600082600381111561113457634e487b7160e01b600052602160045260246000fd5b141561118e5760405162461bcd60e51b8152602060048201526024808201527f4552524f523a4952472d3032313a494e5354414e43455f53544154455f494e566044820152631053125160e21b6064820152608401610560565b60008381526002602052604090206001908101805460ff81169285929160ff1916908360038111156111d057634e487b7160e01b600052602160045260246000fd5b02179055506000848152600260205260409081902042600690910155517f2f9cb37a1965ba809b836c1f303671cbab51572c1097ec9d13314b344ce29dc59061094a90869084908790611f63565b611226611297565b6001600160a01b03811661128b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610560565b6112948161159b565b50565b6000546001600160a01b03163314610a005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610560565b6001600160a01b0384166113475760405162461bcd60e51b815260206004820181905260248201527f4552524f523a4952472d3130303a544f4b454e5f414444524553535f5a45524f6044820152606401610560565b600083116113975760405162461bcd60e51b815260206004820152601b60248201527f4552524f523a4952472d3130313a434841494e5f49445f5a45524f00000000006044820152606401610560565b60008260ff16116113ea5760405162461bcd60e51b815260206004820152601b60248201527f4552524f523a4952472d3130323a444543494d414c535f5a45524f00000000006044820152606401610560565b60128260ff16111561143e5760405162461bcd60e51b815260206004820181905260248201527f4552524f523a4952472d3130333a444543494d414c535f544f4f5f4c415247456044820152606401610560565b6001600160a01b03841660009081526001602090815260408083208684529091529020600581015415801561151c57604080518082019091526001600160a01b03808816808352602090920187905283546001600160a01b031990811690921784556001808501888155426005870155600480549283018155600052855460029092027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b81018054909516929093169190911790925590547f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c909101555b60028201805460ff1916600117905582516115409060038401906020860190611aa7565b5060048201805460ff191660ff8681169190911790915542600684015560028301546040517fc1d27bf584baf168c5183f1b23d76c6989b0aeae6b25b7d6efb301fcebda75b4926106a8928a928a9291909116908690611ed9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080823b116116495760405162461bcd60e51b815260206004820152602360248201527f4552524f523a4952472d3132303a52454749535452595f4e4f545f434f4e54526044820152621050d560ea1b6064820152608401610560565b604051631c2d8fb360e31b81526e496e7374616e63655365727669636560881b600482015282906001600160a01b0382169063e16c7d989060240160206040518083038186803b15801561169c57600080fd5b505afa9250505080156116cc575060408051601f3d908101601f191682019092526116c991810190611bbd565b60015b6117245760405162461bcd60e51b815260206004820152602360248201527f4552524f523a4952472d3132313a4e4f545f52454749535452595f434f4e54526044820152621050d560ea1b6064820152608401610560565b91505b50919050565b6000821161177d5760405162461bcd60e51b815260206004820152601b60248201527f4552524f523a4952472d3033303a434841494e5f49445f5a45524f00000000006044820152606401610560565b6001600160a01b0381166117df5760405162461bcd60e51b815260206004820152602360248201527f4552524f523a4952472d3033313a52454749535452595f414444524553535f5a60448201526245524f60e81b6064820152608401610560565b60006117ec848484611938565b9050806118455760405162461bcd60e51b815260206004820152602160248201527f4552524f523a4952472d3033323a494e5354414e43455f49445f494e56414c496044820152601160fa1b6064820152608401610560565b6000848152600260205260409020600581015415801561189e57858255426005830155600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b018690555b6001828101805460ff191690911790556040805160208101918290526000908190526118ce916002850191611aa7565b50600382018590556004820180546001600160a01b0319166001600160a01b038616179055426006830155815460018301546040517fc6141e9efbb8f4a2729e2d3b4b7667a2fcc9b83a48f421a33f8906b5ab8549af926106a892909160ff909116908590611f3f565b6000468314156119ff5760405163b23c748d60e01b81526001600160a01b038316600482015260009081908190309063b23c748d9060240160a06040518083038186803b15801561198857600080fd5b505afa15801561199c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c09190611ccc565b50935093505092508215806119d3575081155b156119e45760009350505050611a55565b8681146119f75760009350505050611a55565b505050611a51565b8282604051602001611a2d92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b604051602081830303815290604052805190602001208414611a5157506000611a55565b5060015b9392505050565b604080516101008101909152600060c0820181815260e0830191909152819081526020016000815260200160608152602001600060ff16815260200160008152602001600081525090565b828054611ab390612205565b90600052602060002090601f016020900481019282611ad55760008555611b1b565b82601f10611aee57805160ff1916838001178555611b1b565b82800160010185558215611b1b579182015b82811115611b1b578251825591602001919060010190611b00565b50611b27929150611b2b565b5090565b5b80821115611b275760008155600101611b2c565b805180151581146103bc57600080fd5b600082601f830112611b60578081fd5b8135611b73611b6e826121b1565b612180565b818152846020838601011115611b87578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611bb2578081fd5b8135611a5581612266565b600060208284031215611bce578081fd5b8151611a5581612266565b60008060408385031215611beb578081fd5b8235611bf681612266565b946020939093013593505050565b600080600060608486031215611c18578081fd5b8335611c2381612266565b925060208401359150604084013560038110611c3d578182fd5b809150509250925092565b60008060008060808587031215611c5d578081fd5b8435611c6881612266565b9350602085013592506040850135611c7f8161227b565b9150606085013567ffffffffffffffff811115611c9a578182fd5b611ca687828801611b50565b91505092959194509250565b600060208284031215611cc3578081fd5b611a5582611b40565b600080600080600060a08688031215611ce3578081fd5b611cec86611b40565b945060208601519350611d0160408701611b40565b9250606086015191506080860151611d1881612266565b809150509295509295909350565b600060208284031215611d37578081fd5b5035919050565b600060208284031215611d4f578081fd5b5051919050565b60008060408385031215611d68578081fd5b82359150602083013560048110611d7d578182fd5b809150509250929050565b60008060408385031215611d9a578182fd5b82359150602083013567ffffffffffffffff811115611db7578182fd5b611dc385828601611b50565b9150509250929050565b600080600060608486031215611de1578081fd5b83359250602084013591506040840135611c3d81612266565b600060208284031215611e0b578081fd5b815167ffffffffffffffff811115611e21578182fd5b8201601f81018413611e31578182fd5b8051611e3f611b6e826121b1565b818152856020838501011115611e53578384fd5b611e648260208301602086016121d9565b95945050505050565b600060208284031215611e7e578081fd5b8151611a558161227b565b60048110611e9957611e9961223a565b9052565b60038110611e9957611e9961223a565b60008151808452611ec58160208601602086016121d9565b601f01601f19169290920160200192915050565b6001600160a01b03851681526020810184905260808101611efd6040830185611e9d565b821515606083015295945050505050565b6001600160a01b03851681526020810184905260808101611f326040830185611e9d565b611e646060830184611e9d565b83815260608101611f536020830185611e89565b8215156040830152949350505050565b83815260608101611f776020830185611e89565b611f846040830184611e89565b949350505050565b600084825260606020830152611fa56060830185611ead565b8281036040840152611fb78185611ead565b9695505050505050565b60208082526029908201527f4552524f523a4952472d3030343a43414c4c5f494e56414c49445f464f525f5360408201526820a6a2afa1a420a4a760b91b606082015260800190565b60208082526022908201527f4552524f523a4952472d3030313a544f4b454e5f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b60208082526025908201527f4552524f523a4952472d3030323a494e5354414e43455f4e4f545f5245474953604082015264151154915160da1b606082015260800190565b6000602082528251602083015260208301516120b06040840182611e89565b50604083015160e060608401526120cb610100840182611ead565b90506060840151608084015260018060a01b0360808501511660a084015260a084015160c084015260c084015160e08401528091505092915050565b6020808252825180516001600160a01b03168383015281015160408301528201516000906121386060840182611e9d565b50604083015160e06080840152612153610100840182611ead565b905060ff60608501511660a0840152608084015160c084015260a084015160e08401528091505092915050565b604051601f8201601f1916810167ffffffffffffffff811182821017156121a9576121a9612250565b604052919050565b600067ffffffffffffffff8211156121cb576121cb612250565b50601f01601f191660200190565b60005b838110156121f45781810151838201526020016121dc565b83811115610b025750506000910152565b60028104600182168061221957607f821691505b6020821081141561172757634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461129457600080fd5b60ff8116811461129457600080fdfea2646970667358221220c5da8ddc65417c4b4b320d1765af6b9adb07df3fd12a0b2ffd1fe7b00145dacd64736f6c63430008020033";

type InstanceRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InstanceRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InstanceRegistry__factory extends ContractFactory {
  constructor(...args: InstanceRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InstanceRegistry> {
    return super.deploy(overrides || {}) as Promise<InstanceRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InstanceRegistry {
    return super.attach(address) as InstanceRegistry;
  }
  override connect(signer: Signer): InstanceRegistry__factory {
    return super.connect(signer) as InstanceRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstanceRegistryInterface {
    return new utils.Interface(_abi) as InstanceRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstanceRegistry {
    return new Contract(address, _abi, signerOrProvider) as InstanceRegistry;
  }
}
