import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { media } from '../scss/config/mixins'
import { apiUrl } from '../tools/apiConfig'

// components
import { Tag } from '../components/atoms/task/Tag'
import { Title } from '../components/atoms/layout/Title'
import { RadarChart } from '../components/atoms/chart/Radar'
import { WelcomeBanner } from '../components/molecules/user/WelcomeBanner'
import { Task } from '../components/molecules/Task'
import { LevelProgress } from '../components/molecules/user/LevelProgress'
import { SavedRessourceTag } from '../components/atoms/task/SavedRessourceTag'
import { PageLocation } from '../components/molecules/layout/PageLocation'
import { AdviceModal } from '../components/molecules/layout/AdviceModal'

// image
import { ReactComponent as ProfilePic } from '../assets/images/profile/profile-pic.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  const [userData, setUserData] = useState(0)
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userImage, setUserImage] = useState('')
  const [savedRessources, setSavedRessources] = useState()
  const [tasks2, setTasks2] = useState([])
  const [adviceTopic, setAdviceTopic] = useState('Eau')
  const [isAdviceModalShown, setShowModal] = useState(false)

  const tasks = [
    { name: 'Eau', savingName: 'water', unit: 'L', progress: 0 },
    { name: 'Gaz', savingName: 'gas', unit: 'KW/h', progress: 49 },
    { name: 'Déchets', savingName: 'waste', unit: 'Kg', progress: 100 },
    {
      name: 'transportsIsValidate',
      savingName: 'transport',
      unit: 'mois',
      progress: 0,
    },
    { name: 'Electricté', savingName: 'elect', unit: 'kW/h', progress: 60 },
  ]

  useEffect(() => {
    let getuserId = localStorage.getItem('idUser')
    let getToken = localStorage.getItem('token')
    let userProfileData = JSON.parse(localStorage.getItem('userPersonalData'))

    setUserFirstName(userProfileData.fistName)
    setUserLastName(userProfileData.lastName)
    setUserImage(
      userProfileData.image ? userProfileData.image : 'profile-pic.svg'
    )
    ;(async () => {
      const result = await axios({
        method: 'get',
        url: `${apiUrl}/api/user/update/${getuserId}`,
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

        let saveEnergie = {
          gas: saveGas,
          water: saveWater,
          waste: saveWaste,
          elect: saveElect,
          transport: saveTransport,
        }

        setSavedRessources(saveEnergie)

        localStorage.setItem('savingEnergie', JSON.stringify(saveEnergie))
        localStorage.setItem(
          'userData',
          JSON.stringify({
            monthsRegistered:
              result.data.additionalDatas.data.nbMonthsRegistered,
          })
        )

        let taskssTest = result.data.additionalDatas.tasks

        taskssTest.forEach((task) => {
          switch (task.name) {
            case 'Eau':
              task.consummed = result.data.additionalDatas.data.mesureWater
              task.limit = userProfileData.limits.waterLimit
              task.percent = 100 - (task.consummed / task.limit) * 100
              break
            case 'Electricté':
              task.consummed =
                result.data.additionalDatas.data.mesureElectricity
              task.limit = userProfileData.limits.electricityLimit
              task.percent = 100 - (task.consummed / task.limit) * 100
              break
            case 'Gaz':
              task.consummed = result.data.additionalDatas.data.mesureGas
              task.limit = userProfileData.limits.gazLimit
              task.percent = 100 - (task.consummed / task.limit) * 100
              break
            case 'Transports':
              task.consummed = task.validate
              task.percent = task.validate == 1 ? 100 : 0
              break
            case 'Déchets':
              task.consummed = result.data.additionalDatas.data.mesureWaste
              task.limit = userProfileData.limits.wasteLimit
              task.percent = 100 - (task.consummed / task.limit) * 100
              break
          }
        })

        console.log('test', taskssTest)
        setUserData(result.data)
        taskssTest.sort((a, b) => {
          return b.percent - a.percent
        })
        setTasks2(taskssTest)
      }
    })()
  }, [])

  console.log('api dashboard result', userData)

  const hideModal = () => {
    setShowModal(false)
    setAdviceTopic('')
  }
  const showModal = (taskName) => {
    setShowModal(true)
    setAdviceTopic(taskName)
  }

  return (
    <PageWrapper className="pageWrapper">
      <AdviceModal
        isShown={isAdviceModalShown}
        article={adviceTopic}
        hideModal={hideModal}
      />
      <MainContentWrapper>
        <div>
          <CustomPageLocation location="Dashboard" />
          <WelcomeBanner
            name={userFirstName}
            currentLevel={userData ? userData.level.levelNumber : 0}
            completedTasks={
              userData
                ? userData.additionalDatas.data.nbValidateTaskInThisYear
                : 0
            }
          />
        </div>
        <MainPageContent>
          <TasksContainer>
            <Title text="Missions en cours :" />
            {tasks2 &&
              tasks2.map((task) => {
                if (
                  task.name === 'Transports'
                    ? Number(task.validate) === 1
                    : (task.consummed / task.limit) * 100 <= 100
                )
                  return (
                    <CustomTask
                      handleClick={showModal}
                      task={task.name}
                      progression={task.percent}
                      consummed={task.consummed}
                      unit={task.unit}
                      limit={task.limit}
                      key={task.name}
                      showHint={true}
                    />
                  )
                else return null
              })}
            <Title text="Missions ratées :"></Title>
            {tasks2 &&
              tasks2.map((task) => {
                if (
                  task.name === 'Transports'
                    ? Number(task.validate) === 0
                    : (task.consummed / task.limit) * 100 > 100
                )
                  return (
                    <CustomTask
                      handleClick={showModal}
                      task={task.name}
                      progression={task.percent}
                      consummed={task.consummed}
                      unit={task.unit}
                      limit={task.limit}
                      key={task.name}
                      showHint={true}
                    />
                  )
                else return null
              })}
          </TasksContainer>
          <CustomLevelProgress
            level={userData ? userData.level.levelNumber : 0}
            taxesReduction={userData ? userData.level.reductionRate : 0}
            progress={
              userData
                ? Math.round(
                    (userData.additionalDatas.data.nbValidateTaskInThisYear /
                      5 -
                      Math.floor(
                        userData.additionalDatas.data.nbValidateTaskInThisYear /
                          5
                      )) *
                      100
                  )
                : 0
            }
          />
        </MainPageContent>
      </MainContentWrapper>
      <UserStats>
        <CustomPic />
        <UserName>
          {userFirstName} {userLastName}
        </UserName>
        <Tag
          text={`Niv. ${userData ? userData.level.levelNumber : 0}`}
          color="green"
          small={true}
        ></Tag>
        <SparedRessourcesTitle>Ressources économisées</SparedRessourcesTitle>
        <TasksStatsWrapper>
          {savedRessources &&
            tasks.map((task) => {
              return (
                <CustomTaskTag
                  icon={task.name}
                  key={task.name}
                  savedAmount={savedRessources[task.savingName]}
                  unit={task.unit}
                />
              )
            })}
        </TasksStatsWrapper>
        <StatTitle>Statistiques</StatTitle>
        {userData && <CustomRadarChart data={userData} />}
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
  margin-left: 2.5%;
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
`
const CustomTaskTag = styled(SavedRessourceTag)`
  margin: 1.9% 2.54%;
`

const StatTitle = styled.p`
  font-size: 19px;
  margin-top: 8%;
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
