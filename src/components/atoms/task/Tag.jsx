import React from 'react'
import styled from 'styled-components'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Tag = (props) => {
  return (
    <TagWrapper
      className={props.className}
      color={props.color}
      isTaskTag={props.isTaskTag}
      small={props.small}
    >
      <Text color={props.color} isTaskTag={props.isTaskTag}>
        {props.text}
      </Text>
    </TagWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const TagWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  border-radius: ${(props) => (props.isTaskTag ? '3px' : '20px')};
  background: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.white};
  padding: ${(props) =>
    props.isTaskTag ? '1px 5px' : props.small ? '2px 11px' : '5px 20px'};
  box-shadow: ${(props) =>
    props.isTaskTag
      ? `0 0 10px ${props.theme[`${props.color}Transparent`]}`
      : 'unset'};
`

const Text = styled.span`
  font-size: 13px;
  color: ${(props) =>
    props.color === 'green' ||
    props.color === 'whiteTransparent' ||
    props.isTaskTag
      ? props.theme.white
      : props.theme.green};
`
