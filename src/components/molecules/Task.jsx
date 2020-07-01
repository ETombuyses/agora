import React from 'react'
import styled from 'styled-components'

import { Tag } from '../atoms/Tag'
import { TaskIcon } from '../atoms/TaskIcon'
import { HintLabel } from '../atoms/HintLabel'

const tasks = {
  electricity: { icon: 'lightning', name: 'Limite : Kw/h' },
  trash: { icon: 'trash', name: 'Limite : ' },
  transports: { icon: 'bus', name: 'Limite : /h' },
  water: { icon: 'water', name: 'Limite : L/h' },
  gas: { icon: 'fire', name: 'Limite : Kw/h' },
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Task = (props) => {
  const [taskProgress, setTaskProgress] = React.useState(0)

  React.useEffect(() => {
    setTaskProgress(props.progression)
  }, [props.progression])

  return (
    <TaskWrapper
      progression={props.progression}
      taskProgress={taskProgress}
      className={props.className}
    >
      <ContentWrapper>
        <CustomTaskIcon
          icon={tasks[props.task].icon}
          color={
            taskProgress <= 0
              ? 'lightRed'
              : taskProgress < 50
              ? 'lightOrange'
              : 'lightGreen'
          }
        />
        <div>
          <HintLabel
            label={tasks[props.task].name}
            hint={props.showHint}
          ></HintLabel>
          <TaskDescription>
            Consommé: <Limit>%</Limit>
          </TaskDescription>
        </div>
      </ContentWrapper>
    </TaskWrapper>
  )
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
    props.progression <= 0 ? `2px solid ${props.theme.rose}` : 'unset'};

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: ${(props) => props.taskProgress + '%'};
    height: 5px;
    background: ${(props) => {
      if (props.progression <= 0) {
        return props.theme.red
      } else if (props.progression < 50) {
        return props.theme.orange
      } else {
        return props.theme.green
      }
    }};
    bottom: 0;
    left: 0;
    transition: width 2s ease;
  }

  span  {
    color: ${(props) => {
      if (props.progression <= 0) {
        return props.theme.red
      } else if (props.progression < 50) {
        return props.theme.orange
      } else {
        return props.theme.green
      }
    }};
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
  font-weight: 500;
`

const Limit = styled.span`
  font-weight: bold;
`
