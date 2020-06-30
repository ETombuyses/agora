import React from 'react'
import styled from 'styled-components'

import { SavedRessourcesRecap } from '../components/organisms/SavedRessourcesRecap'
import { MonthlyTasksRecap } from '../components/molecules/MonthlyTasksRecap'
import { Select } from '../components/atoms/Select'
import { PageLocation } from '../components/atoms/PageLocation'

export default function History() {
  return (
    <div className="pageWrapper">
      <PageLocation location="Historique" />
      <SavedRessourcesRecap />
      <MissionHistoryTitle>Historique des missions</MissionHistoryTitle>
      <CustomSelect />
      <MonthlyTasksRecap />
    </div>
  )
}

const MissionHistoryTitle = styled.h2`
  font-size: 19px;
  margin-top: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`

const CustomSelect = styled(Select)`
  margin-bottom: 11px;
`
