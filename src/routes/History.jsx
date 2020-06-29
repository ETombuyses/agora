import React from 'react'

import { SavedRessourcesRecap } from '../components/organisms/SavedRessourcesRecap'
import { MonthlyTasksRecap } from '../components/molecules/MonthlyTasksRecap'
import { Select } from '../components/atoms/Select'

export default function History() {
  return (
    <div className="pageWrapper">
      <SavedRessourcesRecap />
      <p>Missions accomplies</p>
      <Select />
      <MonthlyTasksRecap />
    </div>
  )
}
