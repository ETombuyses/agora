import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios'

import { SavedRessourcesRecap } from '../components/organisms/SavedRessourcesRecap'
import { MonthlyTasksRecap } from '../components/molecules/MonthlyTasksRecap'
import { Select } from '../components/atoms/Select'
import { PageLocation } from '../components/atoms/PageLocation'

export default function History() {

  //Get object data from local storage
  let savingEnergieStorage = localStorage.getItem('savingEnergie')
  let savingEnergie = JSON.parse(savingEnergieStorage)

  return (
    <div className="pageWrapper">
      <CustomPageLocation location="Historique" />
      <SavedRessourcesRecap
        lightning={savingEnergie.elect}
        waste={savingEnergie.waste}
        water={savingEnergie.water}
        gas={savingEnergie.gas}
        transport={savingEnergie.transport}
      />
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

const CustomPageLocation = styled(PageLocation)`
  margin-bottom: 15px;
`
