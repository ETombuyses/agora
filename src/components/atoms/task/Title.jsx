import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../../scss/config/mixins'

// icon
import { ReactComponent as HelpIcon } from '../../../assets/icons/layout/help-icon.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const TaskTitle = (props) => {
  return (
    <LabelWrapper>
      <Label>{props.title}</Label>
      {props.hint && (
        <HelpIcon onClick={() => props.handleClick(props.title)} />
      )}
    </LabelWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const LabelWrapper = styled.div`
  position: relative;
  display: inline-block;

  svg {
    position: absolute;
    top: 2px;
    right: -calc(16px + 8px);
    margin-left: 8px;
    fill: ${(props) => props.theme.grey};
    width: 16px;
    height: 16px;

    path {
      fill: ${(props) => props.theme.white};
    }
  }
`

const Label = styled.p`
  font-size: ${toRem(15)};
  font-weight: 500;
  margin-bottom: 5px;
  display: inline-block;

  ${media.tablet`
    font-size: ${toRem(16)};
    margin-bottom: 6px;
  `}

  ${media.desktop`
    font-size: ${toRem(17)};
    margin-bottom: 8px;
  `}

  ${media.large`
    font-size: ${toRem(18)};
    margin-bottom: 10px;
  `}
`
