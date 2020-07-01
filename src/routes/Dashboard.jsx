import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { WelcomeBanner } from '../components/molecules/WelcomeBanner'
import { Task } from '../components/molecules/Task'
import { LevelProgress } from '../components/molecules/LevelProgress'

import { media } from '../scss/config/mixins'

import { ReactComponent as ProfilePic } from '../assets/icons/profile-pic.svg'
import { Tag } from '../components/atoms/Tag'
import { TaskStatTag } from '../components/atoms/TaskStatTag'
import { Title } from '../components/atoms/Title'
import { PageLocation } from '../components/atoms/PageLocation'
import { RadarChart } from '../components/atoms/Radar'

import axios from 'axios'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  const [userData, setUserData] = useState(0)

  const tasks = [
    { name: 'water', progress: 0 },
    { name: 'gas', progress: 49 },
    { name: 'trash', progress: 100 },
    { name: 'transports', progress: 0 },
    { name: 'electricity', progress: 60 },
  ]

  useEffect(() => {
    let getuserId = localStorage.getItem('idUser')
    let getToken = localStorage.getItem('token')

    ;(async () => {
      const result = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/user/update/${getuserId}`,
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })

      setUserData(result)
    })()
  }, [])

  return (
    <PageWrapper className="pageWrapper">
      <TasksContainer>
        <PageLocation location="Dashboard" />
        <WelcomeBanner />
        <Title text="Missions en cours :" />
        {tasks.map((task, index) => {
          if (task.progress > 0)
            return (
              <Task
                task={task.name}
                progression={task.progress}
                key={task.name}
                showHint={true}
              />
            )
          else return null
        })}
        <Title text="Missions ratées :"></Title>
        {tasks.map((task, index) => {
          if (task.progress === 0)
            return (
              <Task
                task={task.name}
                progression={task.progress}
                key={task.name}
                showHint={true}
              />
            )
          else return null
        })}
        <CustomLevelProgress progress={30} />
      </TasksContainer>
      <UserStats>
        <CustomPic />
        <UserName>Tristan Lemire</UserName>
        <Tag text="Niv. 1" color="green" small={true}></Tag>
        <SparedRessourcesTitle>Ressources économisées</SparedRessourcesTitle>
        <TasksStatsWrapper>
          {tasks.map((task) => {
            return <CustomTaskTag icon={task.name} key={task.name} />
          })}
        </TasksStatsWrapper>
        <p style={{ fontSize: '19px' }}>Statistiques</p>
        {userData.data && <RadarChart data={userData.data} />}
      </UserStats>
    </PageWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
`

const TasksContainer = styled.div`
  width: 100%;

  ${media.desktop`
    width: 70%;
	`}
`

const UserStats = styled.div`
  min-height: calc(651px + 32px + 32px);
  width: 30%;
  min-width: 260px;
  background: white;
  margin-left: 40px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 12px;

  svg:last-child {
    height: 100% !important;
    margin-top: 10px;
  }
`

/* const MissionTitle = styled.p`
  margin: 16px 0 15px 0;
` */

const CustomLevelProgress = styled(LevelProgress)`
  margin-top: 16px;
`

const CustomPic = styled(ProfilePic)`
  background: ${(props) => props.theme.lightGreen};
  border-radius: 50%;
  margin-bottom: 16px;
  max-height: 100px;
  width: auto;
`

const UserName = styled.span`
  margin-bottom: 16px;
`
const SparedRessourcesTitle = styled.h5`
  margin: 32px auto 15px auto;
`

const TasksStatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`
const CustomTaskTag = styled(TaskStatTag)`
  margin: 8px;
`
