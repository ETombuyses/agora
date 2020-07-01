import React from 'react'
import styled from 'styled-components'

import { media } from '../../scss/config/mixins'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Title = (props) => {
  return <TitleText>{props.text}</TitleText>
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const TitleText = styled.p`
  margin: 16px 0 15px 0;
  font-size: 15px;
  font-weight: 500;

  ${media.desktop`
    font-size: 19px;
  `}
`
