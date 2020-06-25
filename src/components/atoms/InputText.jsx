import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ReactComponent as HelpIcon } from '../../assets/icons/help-icon.svg'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const InputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 2px;
    margin-left: 8px;
    fill: ${(props) => props.theme.grey};
    width: 16px;
    height: 16px;

    path {
      fill: ${(props) => props.theme.white};
    }
  }
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

const Input = styled.input`
  border: none;
  background: ${(props) => props.theme.white};
  border-radius: 5px;
  line-height: 40px;
  /* width: 100%; */
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const InputText = (props) => {
  return (
    <InputWrapper className={props.className}>
      <LabelWrapper>
        <Label>
          {props.label}
          {props.required && <Asterisk>*</Asterisk>}
        </Label>{' '}
        {props.hint && <HelpIcon />}
      </LabelWrapper>
      <Input
        onClick={props.onClickRadio}
        onChange={props.onChangeValue}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required ?? false}
        name={props.name}
        defaultChecked={props.checked ?? ''}
      ></Input>
    </InputWrapper>
  )
}

/* -----------------------------------------------------PROPTYPES------------------------------------------------ */

InputText.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}
