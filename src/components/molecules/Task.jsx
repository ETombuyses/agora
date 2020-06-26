import React from 'react'
import styled from 'styled-components'

import { Tag } from '../atoms/Tag'
import { TaskIcon } from '../atoms/TaskIcon'
import { HintLabel } from '../atoms/HintLabel'
import { useState } from 'react'

const topics = {
  electricity: 'Electricité',
  trash: 'Déchêts',
  transports: 'Transports',
  water: 'Eau',
  gas: 'Gaz',
}

const icons = {
  electricity: 'lightning',
  trash: 'trash',
  transports: 'bus',
  water: 'water',
  gas: 'fire',
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const TaskWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: ${(props) => props.theme.white};
  border-radius: 15px;
  padding: 13px 16px;
  width: 100%;
  border: ${(props) =>
    props.progression === 0 ? `2px solid ${props.theme.rose}` : 'unset'};

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: ${(props) => props.taskProgress + '%'};
    height: 5px;
    background: ${(props) =>
      props.progression === 0
        ? props.theme.red
        : props.progression < 50
        ? props.theme.orange
        : props.theme.green};
    bottom: 0;
    left: 0;
    transition: width 2s ease;
  }
`

const CustomTag = styled(Tag)`
  position: absolute;
  top: 10px;
  right: 8px;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CustomTaskIcon = styled(TaskIcon)`
  margin-right: 12px;
`

const TaskDescription = styled.p`
  font-size: 12px;
`

const Limit = styled.span`
  font-weight: bold;
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Task = (props) => {
  const [taskProgress, setTaskProgress] = React.useState(0)

  React.useEffect(() => {
    setTaskProgress(props.progression)
  })

  return (
    <TaskWrapper progression={props.progression} taskProgress={taskProgress}>
      <ContentWrapper>
        <CustomTaskIcon
          icon={icons[props.task]}
          color={
            taskProgress === 0
              ? 'lightRed'
              : taskProgress < 50
              ? 'lightOrange'
              : 'lightGreen'
          }
        />
        <div>
          <HintLabel label="Transports" hint={true}></HintLabel>
          <TaskDescription>
            Ne pas consommer plus de <Limit>xKw</Limit>
          </TaskDescription>
        </div>
      </ContentWrapper>
      <CustomTag
        isTaskTag={true}
        color={
          taskProgress === 0 ? 'red' : taskProgress < 50 ? 'orange' : 'green'
        }
        text="3L"
      />
    </TaskWrapper>
  )
}
