import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const ButtonContainer = styled.button`
  padding: ${(props) => (props.size === 'tiny' ? '14px 41px' : '11px 18px')};
  background: ${(props) =>
    props.size === 'tiny'
      ? props.theme.white
      : props.isGovButton
      ? props.theme.govBlue
      : props.theme.green};
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
