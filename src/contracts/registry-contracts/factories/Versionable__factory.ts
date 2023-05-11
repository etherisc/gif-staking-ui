/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Versionable, VersionableInterface } from "../Versionable";

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
        internalType: "Version",
        name: "version",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "activatedBy",
        type: "address",
      },
    ],
    name: "LogVersionableActivated",
    type: "event",
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
        name: "activatedBy",
        type: "address",
      },
    ],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "blockNumber",
    outputs: [
      {
        internalType: "Blocknumber",
        name: "",
        type: "uint32",
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
    name: "getVersion",
    outputs: [
      {
        internalType: "Version",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Version",
        name: "_version",
        type: "uint48",
      },
    ],
    name: "getVersionInfo",
    outputs: [
      {
        components: [
          {
            internalType: "Version",
            name: "version",
            type: "uint48",
          },
          {
            internalType: "address",
            name: "implementation",
            type: "address",
          },
          {
            internalType: "address",
            name: "activatedBy",
            type: "address",
          },
          {
            internalType: "Blocknumber",
            name: "activatedIn",
            type: "uint32",
          },
          {
            internalType: "Timestamp",
            name: "activatedAt",
            type: "uint40",
          },
        ],
        internalType: "struct IVersionable.VersionInfo",
        name: "",
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
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "shift",
        type: "uint8",
      },
    ],
    name: "intToBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Version",
        name: "_version",
        type: "uint48",
      },
    ],
    name: "isActivated",
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
        internalType: "ChainId",
        name: "x",
        type: "bytes5",
      },
    ],
    name: "toInt",
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
        internalType: "Blocknumber",
        name: "x",
        type: "uint32",
      },
    ],
    name: "toInt",
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
        internalType: "Timestamp",
        name: "x",
        type: "uint40",
      },
    ],
    name: "toInt",
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
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "Version",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "versionParts",
    outputs: [
      {
        internalType: "VersionPart",
        name: "major",
        type: "uint16",
      },
      {
        internalType: "VersionPart",
        name: "minor",
        type: "uint16",
      },
      {
        internalType: "VersionPart",
        name: "patch",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "versions",
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
  "0x60806040523480156200001157600080fd5b506200001e303362000024565b620003db565b6000620000306200032c565b65ffffffffffff8116600090815260208190526040902060010154909150600160a01b900463ffffffff1615620000be5760405162461bcd60e51b815260206004820152602760248201527f4552524f523a56524e2d3030313a56455253494f4e5f414c52454144595f41436044820152661512559055115160ca1b60648201526084015b60405180910390fd5b6001541562000181576001805460009190620000dc90829062000399565b81548110620000ef57620000ef620003af565b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff1690506200012582826200033d565b6200017f5760405162461bcd60e51b8152602060048201526024808201527f4552524f523a56524e2d3030323a56455253494f4e5f4e4f545f494e4352454160448201526353494e4760e01b6064820152608401620000b5565b505b60018054808201825560009190915260058082047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805465ffffffffffff808616600694909506939093026101000a848102930219169190911790556040805160a0810182529182526001600160a01b038086166020840152841690820152606081016200020d4390565b63ffffffff1681526020014264ffffffffff90811690915265ffffffffffff8084166000908152602081815260409182902085518154928701516001600160a01b039081166601000000000000026001600160d01b0319909416919095161791909117815584820151600190910180546060870151608090970151909516600160c01b0264ffffffffff60c01b1963ffffffff909716600160a01b026001600160c01b031990961692909416919091179390931793909316179055517ff7b17693e830f8b239607e857ac81b076450829d544c053d533d1b278d18cd89906200031f9083908690869065ffffffffffff9390931683526001600160a01b03918216602084015216604082015260600190565b60405180910390a1505050565b60006200033862000352565b905090565b65ffffffffffff808216908316115b92915050565b60006200033881808080808080806200036c8180620003c5565b620003789190620003c5565b979650505050505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156200034c576200034c62000383565b634e487b7160e01b600052603260045260246000fd5b808201808211156200034c576200034c62000383565b610a1e80620003eb6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063aa615ec811610071578063aa615ec814610163578063b88da75914610186578063bd4080ec14610199578063da09d484146101c6578063de788b2c146101de578063f8b1cb3c1461025157600080fd5b80631080d895146100b957806354fd4d50146100e257806357e871e71461010157806366362612146101155780636effeac4146101375780639555c4db1461014e575b600080fd5b6100cc6100c7366004610804565b610259565b6040516100d9919061083a565b60405180910390f35b6100ea61028f565b60405165ffffffffffff90911681526020016100d9565b60405163ffffffff431681526020016100d9565b610129610123366004610888565b60d81c90565b6040519081526020016100d9565b6101296101453660046108b9565b63ffffffff1690565b61016161015c3660046108fb565b61029e565b005b61017661017136600461092e565b6102ac565b60405190151581526020016100d9565b6100ea610194366004610956565b6102d8565b6101a1610373565b6040805161ffff948516815292841660208401529216918101919091526060016100d9565b6101296101d436600461096f565b64ffffffffff1690565b6101f16101ec36600461092e565b610393565b60408051825165ffffffffffff1681526020808401516001600160a01b039081169183019190915283830151169181019190915260608083015163ffffffff169082015260809182015164ffffffffff169181019190915260a0016100d9565b600154610129565b6040805160ff831684901b60f01b6001600160f01b03191660208201528151600281830301815260229091019091525b92915050565b6000610299610490565b905090565b6102a8828261049e565b5050565b65ffffffffffff16600090815260208190526040902060010154600160a01b900463ffffffff16151590565b60015460009082106103315760405162461bcd60e51b815260206004820152601d60248201527f4552524f523a56524e2d3031303a494e4445585f544f4f5f4c4152474500000060448201526064015b60405180910390fd5b6001828154811061034457610344610996565b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff169050919050565b600080600061038861038361028f565b61077d565b925092509250909192565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101919091526103c7826102ac565b6104135760405162461bcd60e51b815260206004820152601d60248201527f4552524f523a56524e2d3032303a56455253494f4e5f554e4b4e4f574e0000006044820152606401610328565b5065ffffffffffff90811660009081526020818152604091829020825160a0810184528154948516815266010000000000009094046001600160a01b03908116928501929092526001015490811691830191909152600160a01b810463ffffffff166060830152600160c01b900464ffffffffff16608082015290565b6000610299816000806107bf565b60006104a861028f565b90506104b3816102ac565b156105105760405162461bcd60e51b815260206004820152602760248201527f4552524f523a56524e2d3030313a56455253494f4e5f414c52454144595f41436044820152661512559055115160ca1b6064820152608401610328565b600154156105d457600180546000919061052b9082906109c2565b8154811061053b5761053b610996565b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff16905061057a828265ffffffffffff90811691161190565b6105d25760405162461bcd60e51b8152602060048201526024808201527f4552524f523a56524e2d3030323a56455253494f4e5f4e4f545f494e4352454160448201526353494e4760e01b6064820152608401610328565b505b60018054808201825560009190915260058082047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805465ffffffffffff808616600694909506939093026101000a848102930219169190911790556040805160a0810182529182526001600160a01b0380861660208401528416908201526060810161065f4390565b63ffffffff1681526020014264ffffffffff90811690915265ffffffffffff8084166000908152602081815260409182902085518154928701516001600160a01b039081166601000000000000026001600160d01b0319909416919095161791909117815584820151600190910180546060870151608090970151909516600160c01b0264ffffffffff60c01b1963ffffffff909716600160a01b026001600160c01b031990961692909416919091179390931793909316179055517ff7b17693e830f8b239607e857ac81b076450829d544c053d533d1b278d18cd89906107709083908690869065ffffffffffff9390931683526001600160a01b03918216602084015216604082015260600190565b60405180910390a1505050565b6000808065ffffffffffff841661ffff602086901c1661079d83836109c2565b9150601082901c60006107b081856109c2565b92989197509195509350505050565b600061ffff84811690848116908416806107ef63ffff0000601089901b1665ffff0000000060208b901b166109d5565b6107f991906109d5565b979650505050505050565b6000806040838503121561081757600080fd5b82359150602083013560ff8116811461082f57600080fd5b809150509250929050565b600060208083528351808285015260005b818110156108675785810183015185820160400152820161084b565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561089a57600080fd5b81356001600160d81b0319811681146108b257600080fd5b9392505050565b6000602082840312156108cb57600080fd5b813563ffffffff811681146108b257600080fd5b80356001600160a01b03811681146108f657600080fd5b919050565b6000806040838503121561090e57600080fd5b610917836108df565b9150610925602084016108df565b90509250929050565b60006020828403121561094057600080fd5b813565ffffffffffff811681146108b257600080fd5b60006020828403121561096857600080fd5b5035919050565b60006020828403121561098157600080fd5b813564ffffffffff811681146108b257600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b81810381811115610289576102896109ac565b80820180821115610289576102896109ac56fea2646970667358221220681e2224f34b1586e832191c038de440d8aa59b0d2d9674b2db5673b799c808b64736f6c63430008130033";

type VersionableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VersionableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Versionable__factory extends ContractFactory {
  constructor(...args: VersionableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Versionable> {
    return super.deploy(overrides || {}) as Promise<Versionable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Versionable {
    return super.attach(address) as Versionable;
  }
  override connect(signer: Signer): Versionable__factory {
    return super.connect(signer) as Versionable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VersionableInterface {
    return new utils.Interface(_abi) as VersionableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Versionable {
    return new Contract(address, _abi, signerOrProvider) as Versionable;
  }
}
