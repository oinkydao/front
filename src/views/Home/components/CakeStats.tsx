import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
    background-position: right top;
    background-size: 75%;
    background-color: #0e290dba;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgb(192 210 49 / 52%), 0 8px 16px 0 rgb(255 255 255), 0 0 0 1px rgb(255 255 255 / 87%);
    color: #5f7888;
    overflow: hidden;
    position: relative;
    border: 4px solid #fcde59;
 
`
const CardBodyExtended = styled(CardBody)`
  width: 100%;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledCakeStats>
      <CardBodyExtended>
        <Heading size="lg" mb="24px">
        CIRCULATING OINK SUPPLY
        </Heading>
        <Row>
          
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">Total OINK Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        
    
      </CardBodyExtended>
    </StyledCakeStats>
  )
}

export default CakeStats
