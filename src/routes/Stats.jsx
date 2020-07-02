import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Components
import { Title } from '../components/atoms/Title'
import { PageLocation } from '../components/atoms/PageLocation'
import { GlobalDataCard } from '../components/atoms/GlobalDataCard'
import { GraphCard } from '../components/molecules/GraphCard'

import { media } from '../scss/config/mixins'
import axios from 'axios'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Home() {
  const [userData, setUserData] = useState(0)

  useEffect(() => {
    let getuserId = localStorage.getItem('idUser')
    let getToken = localStorage.getItem('token')

    ;(async () => {
      const result = await axios({
        method: 'get',
        url: `http://127.0.0.1:8000/api/user/analytics/${getuserId}`,
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })

      setUserData(result)
    })()
  }, [])

  return (
    <div className="pageWrapper">
      <PageLocationContent location="Analytique" />
      {userData.data && (
        <GlobalDataCardWrapper>
          <GlobalDataCard
            icon={'user'}
            number={userData.data.allYears.nbUser}
            unit={'utilisateurs'}
          />
          <GlobalDataCard
            icon={'task'}
            number={userData.data.allYears.nbValidateTask}
            unit={'missions'}
          />
        </GlobalDataCardWrapper>
      )}
      <Title text="Missions réussis au total" />
      {userData.data && (
        <GraphContainer>
          <GraphCard data={userData.data.thisYear.Eau} />
          <GraphCard data={userData.data.thisYear.Electricté} />
          <GraphCard data={userData.data.thisYear.Gaz} />
          <GraphCard data={userData.data.thisYear.Déchêts} />
          <GraphCard data={userData.data.thisYear.Transports} />
        </GraphContainer>
      )}
    </div>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const GlobalDataCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-bottom: 16px;
  }

  ${media.large`
    flex-direction: row;

    div:first-child {
      margin: 0 50px 0 0;
    }
  `}
`

const GraphContainer = styled.div`
  ${media.large`
    display: flex;
    flex-wrap: wrap;
  `}
`
const PageLocationContent = styled(PageLocation)`
  margin-bottom: 15px;
`
