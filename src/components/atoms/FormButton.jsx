import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export default function Button(props) {
  const Icon = props.icon
  return (
    <FormButton size={props.size} type={props.isFormButton ? 'submit' : 'button'} withIcon={props.withIcon}>
      <ButtonInside>
        { props.icon && <Icon/>}<Text icon={props.icon}>Sendbutton</Text>
      </ButtonInside>
    </FormButton>
  )
}

/* -----------------------------------------------------PropTypes------------------------------------------------ */

Button.propTypes = {
  isFormButton: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.elementType
}

Button.defaultProps = {
  isFormButton: false,
  size: ''
}


/* -----------------------------------------------------STYLE------------------------------------------------ */

const FormButton = styled.button`
padding: ${props => props.size === 'tiny' ? '14px 41px' : '11px 18px'};
background: ${props => props.size === 'tiny' ? props.theme.white : props.theme.green};
border-radius: 5px;
border: none;
outline: none;
color: ${props => props.size === 'tiny' ? props.theme.black : props.theme.white};
font-size: ${props => props.size === 'tiny' ? '10px' : '14px'};
font-weight: bold;
display: inline-block;
`

const ButtonInside = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

// issue with margin
const Text = styled.p`
margin-left: ${props => props.icon ? '12px' : '0px'}
`