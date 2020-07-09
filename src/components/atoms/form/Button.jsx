import React from 'react'
import styled from 'styled-components'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Button = (props) => {
  const Icon = props.icon
  return (
    <ButtonContainer
      className={props.className}
      onClick={props.onClickButton}
      isFullWidth={props.isFullWidth}
      size={props.size}
      type={props.isFormButton ? 'submit' : 'button'}
      withIcon={props.withIcon}
      isGovButton={props.isGovButton}
    >
      <ButtonInner>
        {props.icon && <Icon />}
        <Text icon={props.icon}>{props.text}</Text>
      </ButtonInner>
    </ButtonContainer>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const ButtonContainer = styled.button`
  padding: ${(props) => (props.size === 'tiny' ? '14px 41px' : '11px 18px')};
  background: ${(props) => {
    if (props.size === 'tiny') {
      return props.theme.white
    } else if (props.isGovButton) {
      return props.theme.govBlue
    } else {
      return props.theme.green
    }
  }};
  border-radius: 5px;
  border: none;
  outline: none;
  color: ${(props) =>
    props.size === 'tiny' ? props.theme.black : props.theme.white};
  display: inline-block;
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  cursor: pointer;
`

const ButtonInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  margin-left: ${(props) => (props.icon ? '12px' : '0px')};
  color: ${(props) => props.theme.white};
`
