import React, { forwardRef } from 'react'
import styled from 'styled-components'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 24px;

  input:checked + label {
    background-color: #54e173;
    color: #fff;
  }
`

const InputButton = styled.input`
  display: none;
`

const LabelText = styled.label`
  position: relative;
  color: black;
  background-color: white;
  font-size: 14px;
  text-align: center;
  height: 43px;
  width: 100px;
  display: block;
  cursor: pointer;
  border-radius: 5px;
  line-height: 45px;
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const RadioButton = forwardRef((props, ref) => {
  return (
    <ButtonWrapper>
      <InputButton
        ref={ref}
        type="radio"
        name={props.name}
        value={props.value}
        id={props.value}
        defaultChecked={props.defaultChecked ?? ''}
      />
      <LabelText htmlFor={props.value}>{props.text}</LabelText>
    </ButtonWrapper>
  )
})
