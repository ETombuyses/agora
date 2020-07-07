import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'

// components
import { Tag } from '../atoms/task/Tag'
import { RadarChart } from '../atoms/chart/Radar'
import { SavedRessourceTag } from '../atoms/task/SavedRessourceTag'

// image
import { ReactComponent as ProfilePic } from '../../assets/images/profile/profile-pic.svg'

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
  { name: 'Electricté', savingName: 'elect', unit: 'kW/h', progress: 60 },
]

export const UserPanel = (props) => {
  return (
    <UserStats>
      <CustomPic />
      <UserName>
        {props.userFirstName} {props.userLastName}
      </UserName>
      <Tag text={`Niv. ${props.level}`} color="green" small={true}></Tag>
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
    height: inherit;
	`}
`

const CustomPic = styled(ProfilePic)`
  background: ${(props) => props.theme.grassGreen};
  border-radius: 50%;
  margin-bottom: 5%;
  width: 70px;
  height: 70px;
  min-height: 70px;
  min-height: 70px;

  ${media.desktop`
    width: 100px;
    height: 100px;
    min-height: 100px;
    min-height: 100px;
  `}

  ${media.large`
    width: 120px;
    height: 120px;
    min-height: 120px;
    min-height: 120px;
  `}
`

const UserName = styled.span`
  margin-bottom: 6%;
  font-size: ${toRem(20)};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.large`
    font-size: ${toRem(23)};
  `}
`
const SparedRessourcesTitle = styled.h5`
  margin: 10% auto 1.7% auto;
  font-size: ${toRem(16)};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.large`
    font-size: ${toRem(18)};
  `}
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
  font-size: ${toRem(16)};
  margin-top: 8%;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.large`
    font-size: ${toRem(18)};
  `}
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
