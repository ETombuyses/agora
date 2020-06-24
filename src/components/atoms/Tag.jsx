import React from 'react'
import styled from 'styled-components'


const TagWrapper = styled.div`
display: inline-block;
margin: 0 auto;
border-radius: 10px;
background: ${props => props.color === 'green' ? props.theme.green : props.color === 'whiteTransparent' ? props.theme.whiteTransparent : props.theme.white};
padding: 5px 20px;
color: ${props => props.color === 'green' ? props.theme.white : props.color === 'whiteTransparent' ? props.theme.white : props.theme.green};
`

const Text = styled.span`
font-size: 13px;
font-weight: bold;
`

export const Tag = props => {
  return (
    <TagWrapper className={props.className} color={props.color}>
      <Text>{props.text}</Text>
    </TagWrapper>
  )
}