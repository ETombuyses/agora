import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Button = (props) => {
  const Icon = props.icon
  return (
    <ButtonContainer
      className={props.className}
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

/* -----------------------------------------------------PROPTYPES------------------------------------------------ */

Button.propTypes = {
  isFormButton: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.elementType,
}

Button.defaultProps = {
  isFormButton: false,
  size: '',
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
  font-size: ${(props) => (props.size === 'tiny' ? '10px' : '14px')};
  font-weight: normal;
  display: inline-block;
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
`

const ButtonInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  margin-left: ${(props) => (props.icon ? '12px' : '0px')};
`
