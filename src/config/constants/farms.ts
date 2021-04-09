import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'OINK',
    lpAddresses: {
      97: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
      56: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
    },
    tokenSymbol: 'FOAM',
    tokenAddresses: {
      97: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
      56: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'OINK-BNB LP',
    lpAddresses: {
      97: '0x95cc753d435ea53552fed0c2718e63ff998ab142', // OINK-BNB LP
      56: '0x95cc753d435ea53552fed0c2718e63ff998ab142', // OINK-BNB LP
    },
    tokenSymbol: 'OINK',
    tokenAddresses: {
      97: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
      56: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'OINK-BUSD LP',
    lpAddresses: {
      97: '0x95cc753d435ea53552fed0c2718e63ff998ab142', // OINK-BUSD LP
      56: '0x95cc753d435ea53552fed0c2718e63ff998ab142', // OINK-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'OINK-CAKE LP',
    lpAddresses: {
      97: '0xE2DD1214a65a173Dce04372930Fc0a22F8df7f23', // OINK-CAKE  LP
      56: '0xE2DD1214a65a173Dce04372930Fc0a22F8df7f23', // OINK-CAKE  LP
    },
    tokenSymbol: 'OINK',
    tokenAddresses: {
      97: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
      56: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
    },
    quoteTokenSymbol: QuoteToken.OINK,
    quoteTokenAdresses: contracts.oink,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BUSD-BNB LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
