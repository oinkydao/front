import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'OINK',
    stakingTokenName: QuoteToken.OINK,
    stakingTokenAddress: '0xE742C2b5Cd1585EA73DA842d7D6B2d5daBdDeC00', // OINK
    contractAddress: {
      97: '0xD3C61Cf8dE84E6b4B5dB7E25739b8435860b84e3', // MasterChef
      56: '0xD3C61Cf8dE84E6b4B5dB7E25739b8435860b84e3', // MasterChef
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://OinkyDao.app',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
