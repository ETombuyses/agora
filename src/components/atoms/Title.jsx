import React from 'react'
import styled from 'styled-components'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Title = (props) => {
  return <TitleText>{props.text}</TitleText>
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const TitleText = styled.p`
  margin: 16px 0 15px 0;
`
