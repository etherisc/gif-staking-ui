/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DemoV10, DemoV10Interface } from "../DemoV10";

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
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "activatedBy",
        type: "address",
      },
    ],
    name: "activateAndSetOwner",
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
    inputs: [],
    name: "message",
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
        internalType: "string",
        name: "newMessage",
        type: "string",
      },
    ],
    name: "setMessage",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "upgradable",
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
  "0x60806040523480156200001157600080fd5b506200001e303362000140565b600254610100900460ff16158080156200003f5750600254600160ff909116105b806200005b5750303b1580156200005b575060025460ff166001145b620000c45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6002805460ff191660011790558015620000e8576002805461ff0019166101001790555b620000f262000444565b801562000139576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5062000631565b60006200014c620004ac565b65ffffffffffff8116600090815260208190526040902060010154909150600160a01b900463ffffffff1615620001d65760405162461bcd60e51b815260206004820152602760248201527f4552524f523a56524e2d3030313a56455253494f4e5f414c52454144595f41436044820152661512559055115160ca1b6064820152608401620000bb565b6001541562000299576001805460009190620001f4908290620005ef565b8154811062000207576200020762000605565b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff1690506200023d8282620004c2565b620002975760405162461bcd60e51b8152602060048201526024808201527f4552524f523a56524e2d3030323a56455253494f4e5f4e4f545f494e4352454160448201526353494e4760e01b6064820152608401620000bb565b505b60018054808201825560009190915260058082047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805465ffffffffffff808616600694909506939093026101000a848102930219169190911790556040805160a0810182529182526001600160a01b03808616602084015284169082015260608101620003254390565b63ffffffff1681526020014264ffffffffff90811690915265ffffffffffff8084166000908152602081815260409182902085518154928701516001600160a01b039081166601000000000000026001600160d01b0319909416919095161791909117815584820151600190910180546060870151608090970151909516600160c01b0264ffffffffff60c01b1963ffffffff909716600160a01b026001600160c01b031990961692909416919091179390931793909316179055517ff7b17693e830f8b239607e857ac81b076450829d544c053d533d1b278d18cd8990620004379083908690869065ffffffffffff9390931683526001600160a01b03918216602084015216604082015260600190565b60405180910390a1505050565b600254610100900460ff16620004a05760405162461bcd60e51b815260206004820152602b6024820152600080516020620018af83398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000bb565b620004aa620004d7565b565b6000620004bd60016000806200053e565b905090565b65ffffffffffff808216908316115b92915050565b600254610100900460ff16620005335760405162461bcd60e51b815260206004820152602b6024820152600080516020620018af83398151915260448201526a6e697469616c697a696e6760a81b6064820152608401620000bb565b620004aa3362000587565b600061ffff84811690848116908416806200057063ffff0000601089901b1665ffff0000000060208b901b166200061b565b6200057c91906200061b565b979650505050505050565b603580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052601160045260246000fd5b81810381811115620004d157620004d1620005d9565b634e487b7160e01b600052603260045260246000fd5b80820180821115620004d157620004d1620005d9565b61126e80620006416000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80639555c4db116100ad578063de788b2c11610071578063de788b2c14610294578063e21f37ce14610307578063f2fde38b1461030f578063f4d26fec14610322578063f8b1cb3c1461032a57600080fd5b80639555c4db14610206578063aa615ec814610219578063b88da7591461023c578063bd4080ec1461024f578063da09d4841461027c57600080fd5b806366362612116100f457806366362612146101975780636effeac4146101b9578063715018a6146101d05780638da5cb5b146101d85780638e258689146101f357600080fd5b80631080d89514610126578063368b87721461014f57806354fd4d501461016457806357e871e714610183575b600080fd5b610139610134366004610d1d565b610332565b6040516101469190610d99565b60405180910390f35b61016261015d366004610dc9565b610368565b005b61016c610380565b60405165ffffffffffff9091168152602001610146565b60405163ffffffff43168152602001610146565b6101ab6101a5366004610e7a565b60d81c90565b604051908152602001610146565b6101ab6101c7366004610ea4565b63ffffffff1690565b610162610394565b6035546040516001600160a01b039091168152602001610146565b610162610201366004610ee6565b6103a8565b610162610214366004610f29565b6104c7565b61022c610227366004610f5c565b6104d1565b6040519015158152602001610146565b61016c61024a366004610f84565b6104fd565b610257610593565b6040805161ffff94851681529284166020840152921691810191909152606001610146565b6101ab61028a366004610f9d565b64ffffffffff1690565b6102a76102a2366004610f5c565b6105b3565b60408051825165ffffffffffff1681526020808401516001600160a01b039081169183019190915283830151169181019190915260608083015163ffffffff169082015260809182015164ffffffffff169181019190915260a001610146565b6101396106b0565b61016261031d366004610fc4565b610742565b6101396107bb565b6001546101ab565b6040805160ff831684901b60f01b6001600160f01b03191660208201528151600281830301815260229091019091525b92915050565b6103706107db565b606761037c8282611068565b5050565b600061038f6001600080610835565b905090565b61039c6107db565b6103a6600061087a565b565b600254610100900460ff16158080156103c85750600254600160ff909116105b806103e25750303b1580156103e2575060025460ff166001145b6104075760405162461bcd60e51b81526004016103fe90611128565b60405180910390fd5b6002805460ff19166001179055801561042a576002805461ff0019166101001790555b6104358484846108cc565b6040518060400160405280602081526020017f7370656369616c206d657373616765202d20617320696e697469616c697a6564815250606790816104799190611068565b5080156104c1576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15b50505050565b61037c82826109a2565b65ffffffffffff16600090815260208190526040902060010154600160a01b900463ffffffff16151590565b60015460009082106105515760405162461bcd60e51b815260206004820152601d60248201527f4552524f523a56524e2d3031303a494e4445585f544f4f5f4c4152474500000060448201526064016103fe565b6001828154811061056457610564611176565b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff169050919050565b60008060006105a86105a3610380565b610c81565b925092509250909192565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101919091526105e7826104d1565b6106335760405162461bcd60e51b815260206004820152601d60248201527f4552524f523a56524e2d3032303a56455253494f4e5f554e4b4e4f574e00000060448201526064016103fe565b5065ffffffffffff90811660009081526020818152604091829020825160a0810184528154948516815266010000000000009094046001600160a01b03908116928501929092526001015490811691830191909152600160a01b810463ffffffff166060830152600160c01b900464ffffffffff16608082015290565b6060606780546106bf90610fdf565b80601f01602080910402602001604051908101604052809291908181526020018280546106eb90610fdf565b80156107385780601f1061070d57610100808354040283529160200191610738565b820191906000526020600020905b81548152906001019060200180831161071b57829003601f168201915b5050505050905090565b61074a6107db565b6001600160a01b0381166107af5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fe565b6107b88161087a565b50565b606060405180606001604052806025815260200161121460259139905090565b6035546001600160a01b031633146103a65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103fe565b600061ffff848116908481169084168061086563ffff0000601089901b1665ffff0000000060208b901b166111a2565b61086f91906111a2565b979650505050505050565b603580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600254610100900460ff16158080156108ec5750600254600160ff909116105b806109065750303b158015610906575060025460ff166001145b6109225760405162461bcd60e51b81526004016103fe90611128565b6002805460ff191660011790558015610945576002805461ff0019166101001790555b61094f84836109a2565b610957610cc3565b61096083610742565b80156104c1576002805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020016104b8565b60006109ac610380565b90506109b7816104d1565b15610a145760405162461bcd60e51b815260206004820152602760248201527f4552524f523a56524e2d3030313a56455253494f4e5f414c52454144595f41436044820152661512559055115160ca1b60648201526084016103fe565b60015415610ad8576001805460009190610a2f9082906111b5565b81548110610a3f57610a3f611176565b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff169050610a7e828265ffffffffffff90811691161190565b610ad65760405162461bcd60e51b8152602060048201526024808201527f4552524f523a56524e2d3030323a56455253494f4e5f4e4f545f494e4352454160448201526353494e4760e01b60648201526084016103fe565b505b60018054808201825560009190915260058082047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601805465ffffffffffff808616600694909506939093026101000a848102930219169190911790556040805160a0810182529182526001600160a01b03808616602084015284169082015260608101610b634390565b63ffffffff1681526020014264ffffffffff90811690915265ffffffffffff8084166000908152602081815260409182902085518154928701516001600160a01b039081166601000000000000026001600160d01b0319909416919095161791909117815584820151600190910180546060870151608090970151909516600160c01b0264ffffffffff60c01b1963ffffffff909716600160a01b026001600160c01b031990961692909416919091179390931793909316179055517ff7b17693e830f8b239607e857ac81b076450829d544c053d533d1b278d18cd8990610c749083908690869065ffffffffffff9390931683526001600160a01b03918216602084015216604082015260600190565b60405180910390a1505050565b6000808065ffffffffffff841661ffff602086901c16610ca183836111b5565b9150601082901c6000610cb481856111b5565b92989197509195509350505050565b600254610100900460ff16610cea5760405162461bcd60e51b81526004016103fe906111c8565b6103a6600254610100900460ff16610d145760405162461bcd60e51b81526004016103fe906111c8565b6103a63361087a565b60008060408385031215610d3057600080fd5b82359150602083013560ff81168114610d4857600080fd5b809150509250929050565b6000815180845260005b81811015610d7957602081850181015186830182015201610d5d565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610dac6020830184610d53565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610ddb57600080fd5b813567ffffffffffffffff80821115610df357600080fd5b818401915084601f830112610e0757600080fd5b813581811115610e1957610e19610db3565b604051601f8201601f19908116603f01168101908382118183101715610e4157610e41610db3565b81604052828152876020848701011115610e5a57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208284031215610e8c57600080fd5b81356001600160d81b031981168114610dac57600080fd5b600060208284031215610eb657600080fd5b813563ffffffff81168114610dac57600080fd5b80356001600160a01b0381168114610ee157600080fd5b919050565b600080600060608486031215610efb57600080fd5b610f0484610eca565b9250610f1260208501610eca565b9150610f2060408501610eca565b90509250925092565b60008060408385031215610f3c57600080fd5b610f4583610eca565b9150610f5360208401610eca565b90509250929050565b600060208284031215610f6e57600080fd5b813565ffffffffffff81168114610dac57600080fd5b600060208284031215610f9657600080fd5b5035919050565b600060208284031215610faf57600080fd5b813564ffffffffff81168114610dac57600080fd5b600060208284031215610fd657600080fd5b610dac82610eca565b600181811c90821680610ff357607f821691505b60208210810361101357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561106357600081815260208120601f850160051c810160208610156110405750805b601f850160051c820191505b8181101561105f5782815560010161104c565b5050505b505050565b815167ffffffffffffffff81111561108257611082610db3565b611096816110908454610fdf565b84611019565b602080601f8311600181146110cb57600084156110b35750858301515b600019600386901b1c1916600185901b17855561105f565b600085815260208120601f198616915b828110156110fa578886015182559484019460019091019084016110db565b50858210156111185787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156103625761036261118c565b818103818111156103625761036261118c565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fe6865792066726f6d2075706772616461626c6544656d6f202d2044656d6f2076312e302e30a2646970667358221220fd41851738ca33cdf12830ca30d42eb8ce37a5981809d9c7957d6bc06f683e3264736f6c63430008130033496e697469616c697a61626c653a20636f6e7472616374206973206e6f742069";

type DemoV10ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DemoV10ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DemoV10__factory extends ContractFactory {
  constructor(...args: DemoV10ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DemoV10> {
    return super.deploy(overrides || {}) as Promise<DemoV10>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DemoV10 {
    return super.attach(address) as DemoV10;
  }
  override connect(signer: Signer): DemoV10__factory {
    return super.connect(signer) as DemoV10__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DemoV10Interface {
    return new utils.Interface(_abi) as DemoV10Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DemoV10 {
    return new Contract(address, _abi, signerOrProvider) as DemoV10;
  }
}
