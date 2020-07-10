import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { media, toRem } from '../scss/config/mixins'
import { apiUrl } from '../apiConfig'

// components
import { SectionTitle } from '../components/atoms/layout/SectionTitle'
import { WelcomeBanner } from '../components/molecules/user/WelcomeBanner'
import { Task } from '../components/molecules/Task'
import { LevelProgress } from '../components/molecules/user/LevelProgress'
import { AdviceModal } from '../components/molecules/layout/AdviceModal'
import { UserPanel } from '../components/organisms/UserPanel'
import { PageLocation } from '../components/molecules/layout/PageLocation'
import { RadarChart } from '../components/atoms/chart/Radar'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  const [userData, setUserData] = useState('')
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [savedRessources, setSavedRessources] = useState()
  const [tasks2, setTasks2] = useState([])
  const [adviceTopic, setAdviceTopic] = useState('Eau')
  const [isAdviceModalShown, setShowModal] = useState(false)

  useEffect(() => {
    let getToken = localStorage.getItem('token')

    if (!getToken) {
      window.location.hash = '/login'
      return
    }

    let getuserId = JSON.parse(localStorage.getItem('userInfo')).id
    let userProfileData = JSON.parse(localStorage.getItem('userInfo'))

    setUserFirstName(userProfileData.fistName)
    setUserLastName(userProfileData.lastName)
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
            case 'Electricité':
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
              task.percent = Number(task.validate) === 1 ? 100 : 0
              break
            case 'Déchets':
              task.consummed = result.data.additionalDatas.data.mesureWaste
              task.limit = userProfileData.limits.wasteLimit
              task.percent = 100 - (task.consummed / task.limit) * 100
              break
            default:
              return
          }
        })

        setUserData(result.data)
        taskssTest.sort((a, b) => {
          return b.percent - a.percent
        })
        setTasks2(taskssTest)
      }
    })()
  }, [])

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
            <SectionTitle text="Missions en cours ce mois-ci" />
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
            <SectionTitle text="Missions échouées" />
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
        {userData && (
          <CustomeRadarWrapper>
            <SparedRessourcesTitle>Statistiques</SparedRessourcesTitle>
            <CustomRadarChart type={'mobile'} data={userData} />
          </CustomeRadarWrapper>
        )}
      </MainContentWrapper>
      <UserPanel
        userFirstName={userFirstName}
        userLastName={userLastName}
        level={userData ? userData.level.levelNumber : 0}
        savedRessources={savedRessources}
        userData={userData}
      />
    </PageWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageWrapper = styled.div`
  display: flex;
  align-items: stretch;

  ${media.tablet`
    height: auto;
    min-height: 100vh;
  `}
`

const MainContentWrapper = styled.div`
  width: 100%;

  ${media.tablet`
    width: 65%;
  `}

  ${media.desktop`
    width: 70%;
    display: flex;
    flex-direction: column;
    height: unset;
    flex: 1 0 auto;
	`}
`
const CustomPageLocation = styled(PageLocation)`
  margin-bottom: 15px;
`

const MainPageContent = styled.div`
  ${media.desktop`
    height: auto;
    display: flex;
    flex: 1 1 auto;
	`}
`

const TasksContainer = styled.div`
  ${media.desktop`
     margin-right: 3%;
     width: 60%;
	`}
`

const CustomTask = styled(Task)`
  ${media.desktop`
    :not(:last-child) {
      margin-bottom: 5px;
    }
	`}
`

const CustomLevelProgress = styled(LevelProgress)`
  margin-top: 16px;

  ${media.tablet`
    height: calc(100% - 16px);
    flex: 1 0 auto;
    display: block;
  `}
`
const CustomRadarChart = styled(RadarChart)`
  height: 40vh;
  max-width: 100%;

  svg {
    max-width: 100%;
  }
`
const SparedRessourcesTitle = styled.h5`
  text-align: center;
  font-size: ${toRem(19)};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  margin-bottom: 13px;
`

const CustomeRadarWrapper = styled.div`
  padding-top: 15px;
  margin-top: 16px;
  background: white;
  border-radius: 10px;

  ${media.tablet`
    display: none;
  `}
`
