import React from 'react'
import styled from 'styled-components'

// components
import { Tag } from '../atoms/task/Tag'
import { TaskIcon } from '../atoms/task/Icon'
import { TaskTitle } from '../atoms/task/Title'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

const tasks = {
  Electricté: { icon: 'lightning', unit: 'kW/h', name: 'Electricité' },
  Déchets: { icon: 'trash', unit: 'Kg', name: 'Déchets' },
  transportsIsValidate: { icon: 'bus', unit: '', name: 'Transports' },
  Transports: { icon: 'bus', unit: '', name: 'Transports' },
  Eau: { icon: 'water', unit: 'L', name: 'Eau' },
  Gaz: { icon: 'fire', unit: 'KW/h', name: 'Gaz' },
}

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
          <TaskTitle
            handleClick={props.handleClick}
            title={
              props.isHistoryTask
                ? props.task === 'transportsIsValidate'
                  ? 'Abonnement Navigo'
                  : `Limite: ${props.limit} ${tasks[props.task].unit}`
                : tasks[props.task].name
            }
            hint={props.showHint}
          ></TaskTitle>
          {!props.isHistoryTask && (
            <p>
              {props.progression > 0
                ? props.task === 'Transports'
                  ? 'Activer votre carte Navigo'
                  : 'Ne pas consommer plus de '
                : props.task === 'Transports'
                ? `Vous n'avez pas activé votre carte`
                : 'Vous avez consommé plus de '}
              {props.task !== 'Transports' && (
                <Limit
                  isHistoryTask={props.isHistoryTask}
                  progression={props.progression}
                >
                  {props.limit} {props.unit}
                </Limit>
              )}
            </p>
          )}
          {props.isHistoryTask && (
            <p>
              {props.task === 'transportsIsValidate'
                ? `Status: `
                : `Consommé: `}
              <Limit
                isHistoryTask={props.isHistoryTask}
                progression={props.progression}
              >
                {props.task === 'transportsIsValidate'
                  ? props.progression === 100
                    ? 'abonné'
                    : 'non abonné'
                  : props.consummed + '%'}
              </Limit>
            </p>
          )}
        </div>
      </ContentWrapper>
      {!props.isHistoryTask && (
        <CustomTag
          isTaskTag={true}
          color={
            taskProgress <= 0 ? 'red' : taskProgress < 50 ? 'orange' : 'green'
          }
          text={
            props.task === 'Transports'
              ? props.progression === 100
                ? 'Active'
                : 'Inactive'
              : `${props.consummed} ${props.unit}`
          }
        />
      )}
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

const Limit = styled.span`
  font-weight: bold;
  color: ${(props) => {
    if (!props.isHistoryTask) {
      return props.theme.black
    } else if (props.progression <= 0) {
      return props.theme.red
    } else if (props.progression < 50) {
      return props.theme.orange
    } else {
      return props.theme.green
    }
  }};
`
