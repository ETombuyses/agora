import React from 'react'
import styled from 'styled-components'
import { media } from '../../scss/config/mixins'

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
  {
    month: 'Mai',
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

const slider = React.createRef()

const mounthsNumber = months.length

let translateFactor = 0

const slide = (condition) => {
  // update translateFactor and trailtranslateFactor
  condition === 'increase' ? initiateINC() : initiateDEC()
  // move slide
  move(translateFactor)
}

// function for increase(forward, next) configuration
const initiateINC = () => {
  translateFactor === mounthsNumber - 1
    ? (translateFactor = 0)
    : (translateFactor += 1)
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
  translateFactor === 0
    ? (translateFactor = mounthsNumber - 1)
    : (translateFactor -= 1)
}

// function to transform slide
const move = (S) => {
  slider.current.style.transform = `translateX(calc((-100% - 16px) / ${mounthsNumber} * ${S}))`
}

// ------------------------------------- Mobile touch Slide Section----------------------------
let start, moves, change, sliderWidth

// Do this on initial touch on screen
const handleTouchStart = (e) => {
  // get the touche position of X on the screen
  start = e.touches[0].clientX
  // (each slide with) the width of the slider container divided by the number of slides
  sliderWidth = slider.current.clientWidth / mounthsNumber
}

const handleTouchMove = (e) => {
  // get the touche position of X on the screen when dragging stops
  moves = e.touches[0].clientX
  // Subtract initial position from end position and save to change variabla
  change = start - moves
}

const mobile = () => {
  // if change is greater than a quarter of sliderWidth, next
  if (change > sliderWidth / 4) slide('increase')
  // if change * -1 is greater than a quarter of sliderWidth, prev
  if (change * -1 > sliderWidth / 4) slide('decrease')
  ;[start, moves, change, sliderWidth] = [0, 0, 0, 0]
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const MonthlyTasksRecap = () => {
  return (
    <MonthlyTasksRecapWrapper>
      <TaskSlider
        months={mounthsNumber}
        className="slider"
        ref={slider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={mobile}
      >
        {months.map((month) => {
          return (
            <MontlyTaskList key={month.month}>
              <MonthName>{month.month}</MonthName>
              {month.tasks.map((task) => {
                return (
                  <CustomTask
                    progression={100 - task.consummed}
                    task={task.name}
                    key={task.name}
                    showHint={false}
                  />
                )
              })}
            </MontlyTaskList>
          )
        })}
      </TaskSlider>
    </MonthlyTasksRecapWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

// CSS JS SLIDER
// https://codepen.io/Akimzzy/pen/JjGKMoX?editors=1010

const MonthlyTasksRecapWrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;

  ${media.tablet`
    margin-bottom: -50px;
    margin-right: -50px;
  `}
`
const TaskSlider = styled.ul`
  display: flex;
  width: ${(props) => `calc((100% + 16px) * ${props.months} - 16px)`};
  transition: all 0.25s ease-in;
  transform: translateX(0);

  ${media.tablet`
    width: 100%;
    flex-wrap: wrap;
  `}
`
const MonthName = styled.p`
  margin-bottom: 16px;
  font-weight: bold;
`
const MontlyTaskList = styled.li`
  :not(:last-child) {
    margin-right: 16px;

    ${media.tablet`
      margin-right: 50px;
    `}
  }

  ${media.tablet`
    min-width: 250px;
    width: calc(100% / 4 - 50px);
    max-width: 350px;
    margin-bottom: 50px;
    flex: 1 0 auto;

    :last-child {
      margin-right: 50px;
    }
  `}
`

const CustomTask = styled(Task)`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`
