import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard';

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/oinky.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  background-size: 107px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url(/images/oinky.png);
    background-size: 147px;
    height: 35px;
    padding-top: 179px;
    width: 361px;
    background-position: center;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const FatHeading = styled(Heading)`
  font-weight: 800;
`

const FatText = styled(Text)`
  font-weight: 600;
`

const Home: React.FC = () => {
  return (
    <Page>
      <Hero>
     
        <FatText>
          {/* TranslateString(578, 'The #1 AMM and yield farm on Binance Smart Chain.') */}
          Oinky Oinky DAO on Binance Smart Chain.
        </FatText>
      </Hero>
      <Cards>
        <FarmStakingCard />
        <TwitterCard/>
          <CakeStats />
          
        <TotalValueLockedCard />
       
      </Cards>
    </Page>
  )
}

export default Home
