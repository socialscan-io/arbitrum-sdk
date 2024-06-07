import { L1TransactionReceipt } from '../../src'
import { BigNumber, constants, providers } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { expect } from 'chai'

describe('L1toL2Message events', () => {
  it('does call for nitro events', async () => {
    // Receipt from mainnet tx: 0x00000a61331187be51ab9ae792d74f601a5a21fb112f5b9ac5bccb23d4d5aaba

    const arbProvider = new JsonRpcProvider('https://arb1.arbitrum.io/rpc')
    const l1Provider = new JsonRpcProvider('https://eth-pokt.nodies.app')

    const l1arbSepoli = new JsonRpcProvider(
      'https://arbitrum-sepolia.blockpi.network/v1/rpc/public'
    )
    const l2dodo = new JsonRpcProvider(
      'https://dodochain-testnet.alt.technology'
    )

    const receipt = l1arbSepoli.getTransactionReceipt(
      '0xdab0c166d6fa50942bd963cf67e84628ced8a68a114b60555da48eb17425af5f'
    )
    const l1TxnReceipt = new L1TransactionReceipt(await receipt)

    let txReceipt
    try {
      // Try getting classic messages using a nitro tx
      txReceipt = await l1TxnReceipt.getL1ToL2MessagesClassic(arbProvider)
    } catch (err) {
      // This call should throw an error
      expect(err).to.be.an('error')
      expect((err as Error).message).to.be.eq(
        "This method is only for classic transactions. Use 'getL1ToL2Messages' for nitro transactions."
      )
    } finally {
      // Should not successfully get classic messages
      expect(
        txReceipt,
        'Classic method was successful using a nitro transaction.'
      ).to.be.undefined
    }

    // const isClassic = await l1TxnReceipt.isClassic(l2dodo)
    const isClassic = 'incorrect tx type returned by isClassic call'
    // const msgs = (await l1TxnReceipt.getL1ToL2Messages(l2dodo))
    const msg = (await l1TxnReceipt.getEthDeposits(l2dodo))[0]

    console.log(msg)
    // expect(isClassic, 'incorrect tx type returned by isClassic call').to.be
    //   .false
    // expect(msg.chainId, 'incorrect chain id').to.be.eq(42161)
    // expect(msg.sender, 'incorrect sender').to.be.eq(
    //   '0xeA3123E9d9911199a6711321d1277285e6d4F3EC'
    // )
    //   expect(
    //     msg.messageNumber.eq(BigNumber.from('0x504c')),
    //     'incorrect message number'
    //   ).to.be.true
    //   expect(
    //     msg.l1BaseFee.eq(BigNumber.from('0x05e0fc4c58')),
    //     'incorrect l1 base fee'
    //   ).to.be.true
    //   expect(
    //     msg.messageData.destAddress,
    //     'incorrect dest address on messageData'
    //   ).to.be.eq('0x6c411aD3E74De3E7Bd422b94A27770f5B86C623B')
    //   expect(
    //     msg.messageData.l2CallValue.eq(BigNumber.from('0x0853a0d2313c0000')),
    //     'incorrect l2 call value on messageData'
    //   ).to.be.true
    //   expect(
    //     msg.messageData.l1Value.eq(BigNumber.from('0x0854e8ab1802ca80')),
    //     'incorrect l1 value on messageData'
    //   ).to.be.true
    //   expect(
    //     msg.messageData.maxSubmissionFee.eq(BigNumber.from('0x01270f6740d880')),
    //     'incorrect max submission fee on messageData'
    //   ).to.be.true
    //   expect(
    //     msg.messageData.excessFeeRefundAddress,
    //     'incorrect excess fee refund address'
    //   ).to.be.eq('0xa2e06c19EE14255889f0Ec0cA37f6D0778D06754')
    //   expect(
    //     msg.messageData.callValueRefundAddress,
    //     'incorrect call value refund address'
    //   ).to.be.eq('0xa2e06c19EE14255889f0Ec0cA37f6D0778D06754')
    //   expect(
    //     msg.messageData.gasLimit.eq(BigNumber.from('0x01d566')),
    //     'incorrect gas limit on messageData'
    //   ).to.be.true
    //   expect(
    //     msg.messageData.maxFeePerGas.eq(BigNumber.from('0x11e1a300')),
    //     'incorrect max fee per gas on messageData'
    //   ).to.be.true
    //   expect(msg.messageData.data, 'incorrect data on messageData').to.be.eq(
    //     '0x2e567b36000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a2e06c19ee14255889f0ec0ca37f6d0778d06754000000000000000000000000a2e06c19ee14255889f0ec0ca37f6d0778d067540000000000000000000000000000000000000000000000000853a0d2313c000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    //   )
    //   expect(msg.retryableCreationId, 'incorrect retryable creation id').to.be.eq(
    //     '0x8ba13904639c7444d8578cc582a230b8501c9f0f7903f5069d276fdd3a7dea44'
    //   )
    // })
  })
})
