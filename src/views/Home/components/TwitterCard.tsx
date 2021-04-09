import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import { Timeline } from 'react-twitter-widgets';

const StyledTwitterCard = styled(Card)`
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

const TwitterCard = () => {
  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Our latest news
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'OinkyDao'
          }}
          options={{
            chrome: 'noheader, nofooter',
            width: '400',
            height: '250',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
