import React from 'react'
import styled from 'styled-components'

// icon
import lightBulb from '../../../assets/icons/layout/light-bulb.png'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const AdviceIcon = () => {
  return (
    <AdviceIconWrapper>
      <Icon src={lightBulb} />
    </AdviceIconWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const AdviceIconWrapper = styled.div`
  background: ${(props) => props.theme.greyBlue};
  width: 64px;
  height: 64px;
  padding: 14px;
`

const Icon = styled.img`
  width: 100%;
  height: auto;
`
