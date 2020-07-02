import React, { forwardRef } from 'react'
import styled from 'styled-components'

// components

import { RadioButton } from '../atoms/form/RadioButton'
import { ReactComponent as HelpIcon } from '../../assets/icons/layout/help-icon.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const RadioButtonGroup = forwardRef((props, ref) => {
  const { ref1, ref2 } = ref

  return (
    <RadioButtonWrapper>
      <LabelWrapper>
        <Label>
          {props.label}
          {props.required && <Asterisk>*</Asterisk>}
        </Label>
        {props.hint && <HelpIcon />}
      </LabelWrapper>
      <RadioButtons>
        <RadioButton
          ref={ref1}
          text={props.text1}
          name={props.name1}
          value={props.value1}
          defaultChecked={props.defaultChecked1 ?? false}
        />
        <RadioButton
          ref={ref2}
          text={props.text2}
          name={props.name2}
          value={props.value2}
          defaultChecked={props.defaultChecked2 ?? false}
        />
      </RadioButtons>
    </RadioButtonWrapper>
  )
})

/* -----------------------------------------------------STYLE------------------------------------------------ */

const RadioButtonWrapper = styled.div`
  margin-top: 16px;
`

const RadioButtons = styled.div`
  display: flex;
`

const LabelWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 7px;
  display: inline-block;
  line-height: 130%;
  max-width: calc(100% - 16px - 8px);
`

const Asterisk = styled.span`
  color: ${(props) => props.theme.red};
`
