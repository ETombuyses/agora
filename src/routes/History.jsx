import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// components
import { SavedRessourcesRecap } from '../components/organisms/SavedRessourcesRecap'
import { MonthlyTasksRecap } from '../components/organisms/MonthlyTasksRecap'
import { Select } from '../components/atoms/form/Select'
import { PageLocation } from '../components/molecules/layout/PageLocation'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function History() {
  const [userRegisteredYear, setUserRegisteredYear] = useState('')
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  useEffect(() => {
    let today = new Date()
    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1
    let numberMonthsRegistered = JSON.parse(localStorage.getItem('userData'))
      .monthsRegistered

    let registeredBeforeThisYear = currentMonth - numberMonthsRegistered < 0

    if (!registeredBeforeThisYear) {
      setUserRegisteredYear(currentYear)
    } else {
      let yearsSubscribed = Math.ceil(
        -(currentMonth - numberMonthsRegistered) / 12
      )

      setUserRegisteredYear(currentYear - yearsSubscribed)
    }
  })

  const handleYearCHange = (year) => {
    setSelectedYear(year)
  }

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
      <CustomSelect
        startYear={userRegisteredYear}
        handleYearCHange={handleYearCHange}
      />
      <MonthlyTasksRecap selectedYear={selectedYear} key={selectedYear} />
    </div>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

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
