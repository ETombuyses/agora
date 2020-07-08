import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// icon
import lightBulb from '../../../assets/icons/layout/light-bulb.png'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const AdviceIcon = (props) => {
  return (
    <AdviceIconWrapper className={props.className}>
      <Icon src={lightBulb} alt="ampoule" />
    </AdviceIconWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const AdviceIconWrapper = styled.div`
  background: ${(props) => props.theme.greyBlue};
  width: 48px;
  height: 48px;
  padding: 9px;
  border-radius: 50%;

  ${media.tablet`
    padding: 14px;
    width: 64px;
    height: 64px;
  `}
`

const Icon = styled.img`
  width: 100%;
  height: auto;
`
