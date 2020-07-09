import React from 'react'
import styled from 'styled-components'
import Radar from 'react-d3-radar'

// components
import { TaskIcon } from '../task/Icon'
import { tasks } from '../../../tools/ressources'

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
      {Object.keys(tasks).map((task, index) => {
        return (
          <CustomTaskIcon
            className={tasks[task].name}
            type={props.type}
            icon={tasks[task].icon}
            color={'whiteTransparent'}
            key={index}
          />
        )
      })}
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
const CustomTaskIcon = styled(TaskIcon)`
  position: absolute;

  &.water {
    left: 50%;
    transform: translateX(-50%);
    top: ${(props) => (props.type ? '7px' : '-10px')};
  }

  &.gas {
    top: ${(props) => (props.type ? '33%' : '35%')};
    right: ${(props) => (props.type ? 'calc(56% + 78px);' : 'inherit')};
    left: ${(props) => (props.type ? 'inherit' : '0')};
  }

  &.electricity {
    left: 20%;
    bottom: ${(props) => (props.type ? '20px' : '10px')};
    right: ${(props) => (props.type ? 'calc(48% + 80px)' : 'inherit')};
    left: ${(props) => (props.type ? 'inherit' : '20%')};
  }

  &.transport {
    bottom: ${(props) => (props.type ? '20px' : '10px')};
    right: ${(props) => (props.type ? ' inherit' : '20%')};
    left: ${(props) => (props.type ? 'calc(48% + 80px)' : 'inherit')};
  }

  &.waste {
    top: ${(props) => (props.type ? '33%' : '35%')};
    right: ${(props) => (props.type ? 'inherit' : '0')};
    left: ${(props) => (props.type ? 'calc(56% + 78px);' : 'inherit')};
  }
`
