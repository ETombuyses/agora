import React from 'react'
import styled from 'styled-components'

import { Task } from '../molecules/Task'

const months = [
  {
    month: 'Janvier',
    tasks: [
      { icon: 'water', name: 'water', unit: 'L', consummed: 30 },
      {
        icon: 'lightning',
        name: 'electricity',
        unit: 'Kw/h',
        consummed: 50,
      },
      { icon: 'fire', name: 'gas', unit: 'Kw/h', consummed: 45 },
      { icon: 'trash', name: 'trash', unit: 'kg', consummed: 87 },
      { icon: 'bus', name: 'transports', unit: 'gCO2', consummed: 120 },
    ],
  },
  {
    month: 'Février',
    tasks: [
      { icon: 'water', name: 'water', unit: 'L', consummed: 30 },
      {
        icon: 'lightning',
        name: 'electricity',
        unit: 'Kw/h',
        consummed: 50,
      },
      { icon: 'fire', name: 'gas', unit: 'Kw/h', consummed: 45 },
      { icon: 'trash', name: 'trash', unit: 'kg', consummed: 87 },
      { icon: 'bus', name: 'transports', unit: 'gCO2', consummed: 120 },
    ],
  },
  {
    month: 'Mars',
    tasks: [
      { icon: 'water', name: 'water', unit: 'L', consummed: 30 },
      {
        icon: 'lightning',
        name: 'electricity',
        unit: 'Kw/h',
        consummed: 50,
      },
      { icon: 'fire', name: 'gas', unit: 'Kw/h', consummed: 45 },
      { icon: 'trash', name: 'trash', unit: 'kg', consummed: 87 },
      { icon: 'bus', name: 'transports', unit: 'gCO2', consummed: 120 },
    ],
  },
  {
    month: 'Avril',
    tasks: [
      { icon: 'water', name: 'water', unit: 'L', consummed: 30 },
      {
        icon: 'lightning',
        name: 'electricity',
        unit: 'Kw/h',
        consummed: 50,
      },
      { icon: 'fire', name: 'gas', unit: 'Kw/h', consummed: 45 },
      { icon: 'trash', name: 'trash', unit: 'kg', consummed: 87 },
      { icon: 'bus', name: 'transports', unit: 'gCO2', consummed: 120 },
    ],
  },
]
/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const MonthlyTasksRecap = () => {
  return (
    <Test>
      <MonthlyTasksRecapWrapper>
        {months.map((month) => {
          return (
            <MontlyTask key={month.month}>
              <MonthName>{month.month}</MonthName>
              {month.tasks.map((task) => {
                return (
                  <CustomTask
                    progression={100 - task.consummed}
                    task={task.name}
                    key={task.name}
                  />
                )
              })}
            </MontlyTask>
          )
        })}
      </MonthlyTasksRecapWrapper>
    </Test>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

// CSS JS SLIDER
// https://codepen.io/Akimzzy/pen/JjGKMoX?editors=1010

const MonthlyTasksRecapWrapper = styled.ul`
  display: flex;
  width: calc((100% + 16px) * 4 - 16px);
`
const MonthName = styled.p`
  margin-bottom: 16px;
`
const MontlyTask = styled.li`
  :not(:last-child) {
    margin-right: 16px;
  }
`

const Test = styled.div`
  max-width: 100vw;
  overflow-y: scroll;
`

const CustomTask = styled(Task)`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`
