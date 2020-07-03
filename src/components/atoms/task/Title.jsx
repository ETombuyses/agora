import React from 'react'
import styled from 'styled-components'

// icon
import { ReactComponent as HelpIcon } from '../../../assets/icons/layout/help-icon.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const TaskTitle = (props) => {
  return (
    <LabelWrapper>
      <Label>
        {props.title}
        {/* {props.required && <Asterisk>*</Asterisk>} */}
      </Label>
      {props.hint && <HelpIcon />}
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
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 7px;
  display: inline-block;
  line-height: 130%;
`

const Asterisk = styled.span`
  color: ${(props) => props.theme.red};
`