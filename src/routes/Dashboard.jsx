import React from 'react'
import { LevelProgress } from '../components/molecules/LevelProgress'
import { Task } from '../components/molecules/Task'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Dashboard() {
  return (
    <div className="pageWrapper">
      <Task task="trash" progression={100}></Task>
      <Task task="water" progression={0}></Task>
      <Task task="gas" progression={49}></Task>
      <Task task="transports" progression={50}></Task>
      <Task task="electricity" progression={60}></Task>
      <LevelProgress></LevelProgress>
    </div>
  )
}
