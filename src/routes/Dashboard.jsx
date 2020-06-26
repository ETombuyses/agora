import React from 'react'
import styled from 'styled-components'

import { WelcomeBanner } from '../components/molecules/WelcomeBanner'
import { Task } from '../components/molecules/Task'
import { LevelProgress } from '../components/molecules/LevelProgress'

const tasks = [
  { name: 'trash', progress: 100 },
  { name: 'water', progress: 0 },
  { name: 'gas', progress: 49 },
  { name: 'transports', progress: 0 },
  { name: 'electricity', progress: 60 },
]

/* -----------------------------------------------------STYLE------------------------------------------------ */

const MissionTitle = styled.p`
  margin: 16px 0 15px 0;
`

const CustomLevelProgress = styled(LevelProgress)`
  margin-top: 16px;
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  return (
    <div className="pageWrapper">
      <WelcomeBanner />
      <MissionTitle>Missions en cours :</MissionTitle>
      {tasks.map((task) => {
        if (task.progress > 0)
          return <Task task={task.name} progression={task.progress} />
      })}
      <MissionTitle>Missions ratées :</MissionTitle>
      {tasks.map((task) => {
        if (task.progress === 0)
          return <Task task={task.name} progression={task.progress} />
      })}
      <CustomLevelProgress />
    </div>
  )
}
