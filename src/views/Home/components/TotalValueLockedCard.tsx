import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'

import {
  useTotalValue,
} from 'state/hooks'

const StyledTotalValueLockedCard = styled(Card)`
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

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  const tvl = useTotalValue();

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Heading>
        {tvl ? (
          <>
          <Heading size="xl"> COMING SOON</Heading>
            <Text color="textSubtle">{TranslateString(764, 'Across all Farms and Pools')}</Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
