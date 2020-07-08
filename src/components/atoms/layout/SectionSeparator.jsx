import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SectionSepartor = (props) => {
  return <Separator className={props.className}>Ou</Separator>
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const Separator = styled.span`
  color: black;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    display: block;
    right: calc(100% + 16px);
    top: 50%;
    width: calc(50vw - 24px - 16px - 16px);
    height: 1px;
    background: #717171;
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

  ${media.desktop`
    width: 100%;
    text-align: center;

   ::before {
    transform: rotate(180deg);
    transform-origin: right;
    right: 100%;
    width: 45%;
   }

   ::after {
    transform: rotate(180deg);
    transform-origin: left;
    left: 100%;
    width: 45%;
   }
  `}
`
