import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { media } from '../scss/config/mixins'

// components
import { Tag } from '../components/atoms/task/Tag'
import { Title } from '../components/atoms/layout/Title'
import { RadarChart } from '../components/atoms/chart/Radar'
import { WelcomeBanner } from '../components/molecules/user/WelcomeBanner'
import { Task } from '../components/molecules/Task'
import { LevelProgress } from '../components/molecules/user/LevelProgress'
import { SavedRessourceTag } from '../components/atoms/task/SavedRessourceTag'
import { PageLocation } from '../components/molecules/layout/PageLocation'

// image
import { ReactComponent as ProfilePic } from '../assets/icons/profile/profile-pic.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  const [userData, setUserData] = useState(0)

  console.log('ezfzf', process.env)

  const tasks = [
    { name: 'Eau', progress: 0 },
    { name: 'Gaz', progress: 49 },
    { name: 'Déchêts', progress: 100 },
    { name: 'transportsIsValidate', progress: 0 },
    { name: 'Electricté', progress: 60 },
  ]

  useEffect(() => {
    let getuserId = localStorage.getItem('idUser')
    let getToken = localStorage.getItem('token')

    console.log('ubfuzbf', process.env)
    ;(async () => {
      const result = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/user/update/${getuserId}`,
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })

      if (result.data) {
        let saveGas = result.data.additionalDatas.data.saving_gas
        let saveWater = result.data.additionalDatas.data.saving_water
        let saveWaste = result.data.additionalDatas.data.saving_waste
        let saveElect = result.data.additionalDatas.data.saving_electricity
        let saveTransport = result.data.additionalDatas.data.saving_transport

        let saveEnergie = JSON.stringify({
          gas: saveGas,
          water: saveWater,
          waste: saveWaste,
          elect: saveElect,
          transport: saveTransport,
        })

        localStorage.setItem('savingEnergie', saveEnergie)
        localStorage.setItem(
          'userData',
          JSON.stringify({
            monthsRegistered:
              result.data.additionalDatas.data.nbMonthsRegistered,
          })
        )

        setUserData(result.data)
      }
    })()
  }, [])

  console.log(userData)

  return (
    <PageWrapper className="pageWrapper">
      <MainContentWrapper>
        <div>
          <CustomPageLocation location="Dashboard" />
          <WelcomeBanner />
        </div>
        <MainPageContent>
          <TasksContainer>
            <Title text="Missions en cours :" />
            {tasks.map((task, index) => {
              if (task.progress > 0)
                return (
                  <CustomTask
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
                  <CustomTask
                    task={task.name}
                    progression={task.progress}
                    key={task.name}
                    showHint={true}
                  />
                )
              else return null
            })}
          </TasksContainer>
          <CustomLevelProgress progress={30} />
        </MainPageContent>
      </MainContentWrapper>
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
        <StatTitle>Statistiques</StatTitle>
        {userData.data && <CustomRadarChart data={userData.data} />}
      </UserStats>
    </PageWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;
`

const MainContentWrapper = styled.div`
  width: 100%;

  ${media.desktop`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
	`}
`
const CustomPageLocation = styled(PageLocation)`
  margin-bottom: 15px;
`

const MainPageContent = styled.div`
  ${media.desktop`
    display: flex;
    flex: 1 0 auto;
	`}
`

const TasksContainer = styled.div`
  ${media.desktop`
     margin-right: 3%;
	`}
`

const CustomTask = styled(Task)`
  ${media.desktop`
    :not(:last-child) {
      margin-bottom: 5px;
    }
	`}
`

const UserStats = styled.div`
  height: calc(100vh - 24px - 46px);
  min-height: calc(651px + 32px + 32px);
  width: 30%;
  min-width: 314px;
  background: white;
  margin-left: 40px;
  border-radius: 15px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3% 1.5%;

  ${media.tablet`
    display: flex;
  `}

  ${media.desktop`
    height: 100%;
	`}
`

/* const MissionTitle = styled.p`
  margin: 16px 0 15px 0;
` */

const CustomLevelProgress = styled(LevelProgress)`
  margin-top: 16px;
`

const CustomPic = styled(ProfilePic)`
  background: ${(props) => props.theme.grassGreen};
  border-radius: 50%;
  margin-bottom: 5%;
  width: auto;
  height: 14%;
  min-height: 50px;
  max-height: 150px;
`

const UserName = styled.span`
  margin-bottom: 6%;
`
const SparedRessourcesTitle = styled.h5`
  margin: 10% auto 1.7% auto;
`

const TasksStatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 225px;
  height: 19%;
  min-height: 160px;
`
const CustomTaskTag = styled(SavedRessourceTag)`
  margin: 1.9% 2.54%;
`

const StatTitle = styled.p`
  font-size: 19px;
  margin-top: 10%;
`

const CustomRadarChart = styled(RadarChart)`
  margin-top: 7%;
  height: 30%;
  max-width: 100%;
  /* width: 89%; */
  /* height: calc(260px + 10px); */
  /* width: calc(260px + 10px); */

  svg {
    width: auto !important;
    max-width: 100%;
  }
`
