import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'
import pickProfileSvg from '../../tools/pickProfileSvg'

// components
import { Tag } from '../atoms/task/Tag'
import { RadarChart } from '../atoms/chart/Radar'
import { SavedRessourceTag } from '../atoms/task/SavedRessourceTag'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

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
  { name: 'Electricité', savingName: 'elect', unit: 'kW/h', progress: 60 },
]

export const UserPanel = (props) => {
  let userInfo

  if (localStorage.getItem('userInfo')) {
    userInfo = JSON.parse(localStorage.getItem('userInfo'))
  }

  const ProfilePic = pickProfileSvg(userInfo)

  const CustomPic = styled(ProfilePic)`
  background: ${(props) => props.theme.grassGreen};
  border-radius: 50%;
  margin-bottom: 16px;
  width: 70px;
  height: 70px;
  min-height: 70px;

  ${media.desktop`
    width: 100px;
    height: 100px;
    min-height: 100px;
    margin-bottom: 16px;
  `}

  ${media.large`
    width: 120px;
    height: 120px;
    min-height: 120px;
  `}
`

  return (
    <UserStats>
      <CustomPic />
      <UserName>
        {props.userFirstName} {props.userLastName}
      </UserName>
      <Tag text={`Niv. ${props.level}`} color="green" small={true} />
      <SparedRessourcesTitle>Ressources économisées</SparedRessourcesTitle>
      <TasksStatsWrapper>
        {props.savedRessources &&
          tasks.map((task) => {
            return (
              <CustomTaskTag
                icon={task.name}
                key={task.name}
                savedAmount={props.savedRessources[task.savingName]}
                unit={task.unit}
              />
            )
          })}
      </TasksStatsWrapper>
      <StatTitle>Statistiques</StatTitle>
      {props.userData && <CustomRadarChart data={props.userData} />}
    </UserStats>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const UserStats = styled.div`
  display: none;
  height: auto;
  margin-left: 2.5%;
  background: white;
  border-radius: 15px;

  ${media.tablet`
    width: 45%;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}

  ${media.desktop`
    width: 30%;
	`}
`

const UserName = styled.span`
  margin-bottom: 16px;
  font-size: ${toRem(20)};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.large`
    font-size: ${toRem(23)};
  `}
`
const SparedRessourcesTitle = styled.h3`
  margin: 40px auto 14px auto;
  font-size: ${toRem(16)};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  text-align: center;

  ${media.large`
    font-size: ${toRem(18)};
  `}
`

const TasksStatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 95%;
`
const CustomTaskTag = styled(SavedRessourceTag)`
  margin: 8px;
`

const StatTitle = styled.h3`
  font-size: ${toRem(16)};
  margin-top: 40px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.large`
    font-size: ${toRem(18)};
  `}
`

const CustomRadarChart = styled(RadarChart)`
  margin-top: 7%;
  margin-top: calc(16px + 16px);
  height: 250px;
  max-width: 100%;

  svg {
    width: auto !important;
    max-width: 100%;
  }
`
