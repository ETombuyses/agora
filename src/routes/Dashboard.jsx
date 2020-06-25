import React from 'react'

import { WelcomeBanner } from '../components/molecules/WelcomeBanner'
import { Task } from '../components/molecules/Task'
import { LevelProgress } from '../components/molecules/LevelProgress'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  return (
    <div className="pageWrapper">
      <WelcomeBanner />
      <Task task="trash" progression={100}></Task>
      <Task task="water" progression={0}></Task>
      <Task task="gas" progression={49}></Task>
      <Task task="transports" progression={50}></Task>
      <Task task="electricity" progression={60}></Task>
      <LevelProgress></LevelProgress>
    </div>
  )
}
