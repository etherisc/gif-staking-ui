/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  OwnableProxyAdmin,
  OwnableProxyAdminInterface,
} from "../OwnableProxyAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract VersionedOwnable",
        name: "implementation",
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
    name: "ACTIVATE_AND_SET_OWNER_SIGNATURE",
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
    name: "ACTIVATE_SIGNATURE",
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
    name: "getImplementation",
    outputs: [
      {
        internalType: "contract VersionedOwnable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProxy",
    outputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
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
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementationOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "activatedBy",
        type: "address",
      },
    ],
    name: "getProxyCallData",
    outputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "setProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "transferAdmin",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "contract VersionedOwnable",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b59380380610b5983398101604081905261002f91610111565b610038336100c1565b6001600160a01b03811661009c5760405162461bcd60e51b815260206004820152602160248201527f4552524f523a5058412d3030313a494d504c454d454e544154494f4e5f5a45526044820152604f60f81b606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055610141565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561012357600080fd5b81516001600160a01b038116811461013a57600080fd5b9392505050565b610a09806101506000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b14610134578063933a9ce81461015957806397107d6d1461016a578063aaf10f421461017d578063e49771bf1461018e578063f2fde38b146101a157600080fd5b80630900f010146100ae57806368380765146100c3578063715018a61461011157806375829def146101195780638765c3291461012c575b600080fd5b6100c16100bc366004610870565b6101b4565b005b6100fb60405180604001604052806019815260200178616374697661746528616464726573732c616464726573732960381b81525081565b60405161010891906108e4565b60405180910390f35b6100c16103eb565b6100c1610127366004610870565b6103ff565b6100fb6105b5565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610108565b6002546001600160a01b0316610141565b6100c1610178366004610870565b6105d1565b6001546001600160a01b0316610141565b6100fb61019c3660046108f7565b6106aa565b6100c16101af366004610870565b610738565b6101bc6107b1565b6002546001600160a01b03166102195760405162461bcd60e51b815260206004820152601b60248201527f4552524f523a5058412d3032303a50524f58595f4e4f545f534554000000000060448201526064015b60405180910390fd5b6001600160a01b0381166102795760405162461bcd60e51b815260206004820152602160248201527f4552524f523a5058412d3032313a494d504c454d454e544154494f4e5f5a45526044820152604f60f81b6064820152608401610210565b6001546001600160a01b03908116908216036102e35760405162461bcd60e51b8152602060048201526024808201527f4552524f523a5058412d3032323a494d504c454d454e544154494f4e5f4e4f546044820152635f4e455760e01b6064820152608401610210565b600180546001600160a01b0319166001600160a01b038381169182179092556002546040805180820182526019815278616374697661746528616464726573732c616464726573732960381b6020820152905160248101939093523360448401819052939190911691634f1ef28691859160640160408051601f19818403018152908290529161037291610942565b60408051918290039091206020830180516001600160e01b03166001600160e01b0319928316179052905160e085901b90911681526103b592919060040161095e565b600060405180830381600087803b1580156103cf57600080fd5b505af11580156103e3573d6000803e3d6000fd5b505050505050565b6103f36107b1565b6103fd600061080b565b565b6104076107b1565b6001600160a01b03811661045d5760405162461bcd60e51b815260206004820152601e60248201527f4552524f523a5058412d3033303a50524f58595f41444d494e5f5a45524f00006044820152606401610210565b600160009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d4919061098a565b6001600160a01b0316816001600160a01b0316036105535760405162461bcd60e51b815260206004820152603660248201527f4552524f523a5058412d3033313a50524f58595f41444d494e5f53414d455f4160448201527529afa4a6a82622a6a2a72a20aa24a7a72fa7aba722a960511b6064820152608401610210565b6002546040516308f2839760e41b81526001600160a01b03838116600483015290911690638f28397090602401600060405180830381600087803b15801561059a57600080fd5b505af11580156105ae573d6000803e3d6000fd5b5050505050565b6040518060600160405280602c81526020016109a8602c913981565b6105d96107b1565b6002546001600160a01b0316156106325760405162461bcd60e51b815260206004820152601f60248201527f4552524f523a5058412d3031303a50524f58595f5345545f414c5245414459006044820152606401610210565b6001600160a01b0381166106885760405162461bcd60e51b815260206004820152601860248201527f4552524f523a5058412d3031313a50524f58595f5a45524f00000000000000006044820152606401610210565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60606040518060600160405280602c81526020016109a8602c91396040516001600160a01b03808716602483015280861660448301528416606482015260840160408051601f19818403018152908290529161070591610942565b6040519081900390206020820180516001600160e01b03166001600160e01b031990921691909117905290509392505050565b6107406107b1565b6001600160a01b0381166107a55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610210565b6107ae8161080b565b50565b6000546001600160a01b031633146103fd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146107ae57600080fd5b60006020828403121561088257600080fd5b813561088d8161085b565b9392505050565b60005b838110156108af578181015183820152602001610897565b50506000910152565b600081518084526108d0816020860160208601610894565b601f01601f19169290920160200192915050565b60208152600061088d60208301846108b8565b60008060006060848603121561090c57600080fd5b83356109178161085b565b925060208401356109278161085b565b915060408401356109378161085b565b809150509250925092565b60008251610954818460208701610894565b9190910192915050565b6001600160a01b0383168152604060208201819052600090610982908301846108b8565b949350505050565b60006020828403121561099c57600080fd5b815161088d8161085b56fe6163746976617465416e645365744f776e657228616464726573732c616464726573732c6164647265737329a2646970667358221220877c1e3fc04f479ddafb692a959fd109e3f074d96d7e515b713688a9815b3c0f64736f6c63430008130033";

type OwnableProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnableProxyAdmin__factory extends ContractFactory {
  constructor(...args: OwnableProxyAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnableProxyAdmin> {
    return super.deploy(
      implementation,
      overrides || {}
    ) as Promise<OwnableProxyAdmin>;
  }
  override getDeployTransaction(
    implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(implementation, overrides || {});
  }
  override attach(address: string): OwnableProxyAdmin {
    return super.attach(address) as OwnableProxyAdmin;
  }
  override connect(signer: Signer): OwnableProxyAdmin__factory {
    return super.connect(signer) as OwnableProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableProxyAdminInterface {
    return new utils.Interface(_abi) as OwnableProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as OwnableProxyAdmin;
  }
}
