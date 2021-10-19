/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  ConstructorCallback2,
  ConstructorCallback2Interface,
} from '../ConstructorCallback2'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'returnData',
        type: 'bytes',
      },
    ],
    name: 'TestEvent3',
    type: 'event',
  },
  {
    inputs: [],
    name: 'test',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'test2',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610468806100206000396000f3fe6080604052600436106100295760003560e01c806366e41cb71461002e578063f8a8fd6d14610038575b600080fd5b610036610042565b005b610040610241565b005b600060603373ffffffffffffffffffffffffffffffffffffffff1663bb29998e60e01b33604051602401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610132578051825260208201915060208101905060208303925061010f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610194576040519150601f19603f3d011682016040523d82523d6000602084013e610199565b606091505b50915091508115157fe7713ed83c9f3ef742bc9aec2c297f6bc4c7be68042d4aa69be6ba74848d1882826040518080602001828103825283818151815260200191508051906020019080838360005b838110156102035780820151818401526020810190506101e8565b50505050905090810190601f1680156102305780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b60405161024d9061026d565b604051809103906000f080158015610269573d6000803e3d6000fd5b5050565b6101b88061027b8339019056fe60806040527f1440c4dd67b4344ea1905ec0318995133b550f168b4ee959a0da6b503d7d241460003690506040518082815260200191505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff166366e41cb76040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561008757600080fd5b505af115801561009b573d6000803e3d6000fd5b5050505061010a806100ae6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063bb29998e14602d575b600080fd5b606c60048036036020811015604157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050606e565b005b7fba829c4567200650d8324f5576706bb44be221bc498741a8ddaa9a2739407b7d81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15056fea26469706673582212200e19c09460078f8d2f234984090f4fe12191f75a9cd2ceff7ed5afada4d480e964736f6c634300060b0033a264697066735822122064c019db424dd638507d62b8b24d1c7d81e4dbdeafbce89f43a3478e161787be64736f6c634300060b0033'

export class ConstructorCallback2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConstructorCallback2> {
    return super.deploy(overrides || {}) as Promise<ConstructorCallback2>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ConstructorCallback2 {
    return super.attach(address) as ConstructorCallback2
  }
  connect(signer: Signer): ConstructorCallback2__factory {
    return super.connect(signer) as ConstructorCallback2__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ConstructorCallback2Interface {
    return new utils.Interface(_abi) as ConstructorCallback2Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConstructorCallback2 {
    return new Contract(address, _abi, signerOrProvider) as ConstructorCallback2
  }
}