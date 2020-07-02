import React from 'react'
import styled from 'styled-components'
import Radar from 'react-d3-radar'

import { TaskIcon } from '../task/TaskIcon'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const RadarChart = (props) => {
  const dataChart = props.data.additionalDatas.data

  const nbMonthsRegistered = dataChart.nbMonthsRegistered
  const nbValidateTaskTransport = dataChart.nbValidateTaskTransport
  const nbValidatedTaskElec = dataChart.nbValidatedTaskElec
  const nbValidatedTaskGas = dataChart.nbValidatedTaskGas
  const nbValidatedTaskWaste = dataChart.nbValidatedTaskWaste
  const nbValidatedTaskWater = dataChart.nbValidatedTaskWater

  return (
    <RadarWrapper className={props.className}>
      <TaskIconWater icon={'water'} color={'whiteTransparent'} />
      <TaskIconTrash icon={'trash'} color={'whiteTransparent'} />
      <TaskIconLight icon={'lightning'} color={'whiteTransparent'} />
      <TaskIconBus icon={'bus'} color={'whiteTransparent'} />
      <TaskIconFire icon={'fire'} color={'whiteTransparent'} />
      <Radar
        width={500}
        height={500}
        padding={70}
        domainMax={nbMonthsRegistered}
        highlighted={null}
        data={{
          variables: [
            { key: 'water', label: '' },
            { key: 'waste', label: '' },
            { key: 'transport', label: '' },
            { key: 'electricity', label: '' },
            { key: 'gas', label: '' },
          ],
          sets: [
            {
              key: 'me',
              label: 'My Scores',
              values: {
                water: nbValidatedTaskWater,
                gas: nbValidatedTaskGas,
                transport: nbValidateTaskTransport,
                electricity: nbValidatedTaskElec,
                waste: nbValidatedTaskWaste,
              },
            },
          ],
        }}
      />
    </RadarWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const RadarWrapper = styled.div`
  position: relative;

  g:last-child path {
    fill: ${(props) => props.theme.lightGreen};
    stroke: ${(props) => props.theme.green};
  }
`
const TaskIconWater = styled(TaskIcon)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -10px;
`
const TaskIconFire = styled(TaskIcon)`
  position: absolute;
  top: 35%;
`
const TaskIconLight = styled(TaskIcon)`
  position: absolute;
  bottom: 10px;
  left: 20%;
`
const TaskIconBus = styled(TaskIcon)`
  position: absolute;
  bottom: 10px;
  right: 20%;
`
const TaskIconTrash = styled(TaskIcon)`
  position: absolute;
  top: 35%;
  right: 0;
`
