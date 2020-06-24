import React from 'react'
import styled from 'styled-components'



/* -----------------------------------------------------STYLE------------------------------------------------ */

const Separator = styled.span`
  color: ${(props) => props.theme.grey};
  position: relative;

  ::before {
    content: '';
    position: absolute;
    display: block;
    right: calc(100% + 16px);
    top: 50%;
    width: calc(50vw - 24px - 16px - 16px);
    height: 1px;
    background: ${(props) => props.theme.grey};
  }

  ::after {
    content: '';
    position: absolute;
    display: block;
    left: calc(100% + 16px);
    top: 50%;
    width: calc(50vw - 24px - 16px - 16px);
    height: 1px;
    background: ${(props) => props.theme.grey};
  }
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SectionSepartor = () => {
  return <Separator>Ou</Separator>
}