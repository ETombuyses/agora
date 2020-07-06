import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { media } from '../../scss/config/mixins'
import { apiUrl } from '../../tools/apiConfig'

// component
import { Task } from '../molecules/Task'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

const monthTraduction = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Decembre',
]

const slider = React.createRef()

export const MonthlyTasksRecap = (props) => {
  const [monthsTasksData, setMonthsTasksData] = useState([])

  useEffect(() => {
    let getuserId = localStorage.getItem('idUser')
    let getToken = localStorage.getItem('token')

    ;(async () => {
      const result = await axios({
        method: 'get',
        url: `${apiUrl}/api/user/tasks/${getuserId}/${props.selectedYear}`,
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })

      let rawMonthsData = result.data
      let finalMonthsData = []

      Object.entries(rawMonthsData).forEach((month) => {
        let monthNumber = Number(month[0].split('-')[1])
        let tasks = Object.entries(month[1])
        let tasksReworked = []

        tasks.forEach((task) => {
          if (task[0] === 'transportsIsValidate') {
            let taskSuccess = task[1]
            task[1] = {
              percent: taskSuccess ? '0' : '100',
              success: taskSuccess,
            }
          }
          tasksReworked.push({ name: task[0], data: task[1] })
        })

        // if we want to order taks by percent of ressource consomption
        tasksReworked.sort(function (a, b) {
          return Number(a.data.percent) - Number(b.data.percent)
        })

        finalMonthsData.push({ month: monthNumber, tasks: tasksReworked })
      })
      // order months
      finalMonthsData.sort(function (a, b) {
        return a.month - b.month
      })
      setMonthsTasksData(finalMonthsData)
    })()
  }, [])

  // ---------------------------------------SLIDER---------------------------------------

  let translateFactor = 0

  const slide = (condition) => {
    // update translateFactor and trailtranslateFactor
    condition === 'increase' ? initiateINC() : initiateDEC()
    // move slide
    move(translateFactor)
  }

  // function for increase(forward, next) configuration
  const initiateINC = () => {
    // // whithout sliding back to the first slide
    // translateFactor += translateFactor === monthsTasksData.length - 1 ? 0 : 1

    translateFactor =
      translateFactor === monthsTasksData.length - 1 ? 0 : translateFactor + 1
  }

  // function for decrease(backward, previous) configuration
  const initiateDEC = () => {
    translateFactor =
      translateFactor === 0 ? monthsTasksData.length - 1 : translateFactor - 1
  }

  // function to transform slide
  const move = (S) => {
    slider.current.style.transform = `translateX(calc((-100% - 16px) / ${monthsTasksData.length} * ${S}))`
  }

  // ------------------------------------- Mobile touch Slide Section----------------------------
  let start, moves, change, sliderWidth

  // Do this on initial touch on screen
  const handleTouchStart = (e) => {
    // get the touche position of X on the screen
    start = e.touches[0].clientX
    // (each slide with) the width of the slider container divided by the number of slides
    sliderWidth = slider.current.clientWidth / monthsTasksData.length
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

  return (
    <MonthlyTasksRecapWrapper>
      <TaskSlider
        months={monthsTasksData.length}
        className="slider"
        ref={slider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={mobile}
      >
        {monthsTasksData.map((month) => {
          return (
            <MontlyTaskList key={month.month}>
              <MonthName>{monthTraduction[month.month - 1]}</MonthName>
              {month.tasks.map((task) => {
                return (
                  <CustomTask
                    progression={-(task.data.percent - 100)}
                    consummed={task.data.percent}
                    limit={task.data.Average}
                    task={task.name}
                    key={task.name}
                    showHint={false}
                    isHistoryTask={true}
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
  width: ${(props) => `calc((100% + 14px) * ${props.months} - 16px)`};
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
    /* flex: 1 0 auto; */

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
