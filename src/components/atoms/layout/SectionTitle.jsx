import React from 'react'
import styled from 'styled-components'

import { media, toRem } from '../../../scss/config/mixins'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SectionTitle = (props) => {
  return (
    <TitleText className={'heading' + props.className}>{props.text}</TitleText>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const TitleText = styled.h2`
  font-size: ${toRem(15)};
  margin: 20px 0 12px 0;

  ${media.tablet`
    font-size: ${toRem(17)};
    margin: 22px 0 14px 0;
  `}

  ${media.desktop`
    font-size: ${toRem(19)};
    margin: 24px 0 16px 0;
  `}

  ${media.large`
    font-size: ${toRem(20)};
    margin: 26px 0 18px 0;
  `}
`
