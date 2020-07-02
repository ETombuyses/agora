import React from 'react'
import styled from 'styled-components'

import { media } from '../../scss/config/mixins'

import { TaskIcon } from '../atoms/TaskIcon'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SavedRessource = (props) => {
  return (
    <SavedRessourceWrapper className={props.className}>
      <TaskIcon color="white" icon={props.icon} big={true} />
      <SavingsAmount>
        <Number>{props.savedNumber}</Number> <span>{props.unit}</span>
      </SavingsAmount>
    </SavedRessourceWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const SavedRessourceWrapper = styled.div`
  background: ${(props) => props.theme.greyBlue};
  padding: 8px;
  border-radius: 10px;
  display: flex;

  ${media.desktop`
    padding: 24px 10px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 200px;
  `}
`

const SavingsAmount = styled.div`
  background: ${(props) => props.theme.white};
  padding: 10px 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  flex: 1;
  font-weight: bold;

  ${media.desktop`
    margin-top: 26px;
    margin-left: 0;
    padding: 8px 16px;
  `}
`
const Number = styled.span`
  color: ${(props) => props.theme.green};
  margin-right: 5px;
  font-weight: bold;
`
