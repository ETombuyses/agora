import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'



export default function InputText (props) {
  return (
    <InputWrapper>
      <Label>{props.label}{props.required && <Asterisk>*</Asterisk>}</Label>
      <Input type={props.type} placeholder={props.placeholder}></Input>
    </InputWrapper>
  )
}

// type

InputText.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
}


// SCSS

const InputWrapper = styled.div`
`
const Label = styled.p`
font-size: 16px;
font-weight: bold;
margin-bottom: 7px;
`

const Asterisk = styled.span`
color: ${props => props.theme.red};
`

const Input = styled.input`
border: none;
background: ${props => props.theme.white};
border-radius: 5px;
line-height: 40px;
`