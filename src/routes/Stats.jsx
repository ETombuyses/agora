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
  const [selectValue, setSelectValue] = useState('water')

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

  const handleChangeEnergie = (e) => {
    setSelectValue(e)
  }

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
        <>
          <GraphContainerMobile>
            {selectValue === 'water' && (
              <GraphCard
                value={'water'}
                data={userData.data.thisYear.Eau}
                handleChangeEnergie={handleChangeEnergie}
              />
            )}
            {selectValue === 'electricity' && (
              <GraphCard
                value={'electricity'}
                data={userData.data.thisYear.Electricté}
                handleChangeEnergie={handleChangeEnergie}
              />
            )}
            {selectValue === 'gas' && (
              <GraphCard
                value={'gas'}
                data={userData.data.thisYear.Gaz}
                handleChangeEnergie={handleChangeEnergie}
              />
            )}
            {selectValue === 'waste' && (
              <GraphCard
                value={'waste'}
                data={userData.data.thisYear.Déchêts}
                handleChangeEnergie={handleChangeEnergie}
              />
            )}
            {selectValue === 'transport' && (
              <GraphCard
                value={'transport'}
                data={userData.data.thisYear.Transports}
                handleChangeEnergie={handleChangeEnergie}
              />
            )}
          </GraphContainerMobile>
          <GraphContainerDesktop>
            <GraphCard
              data={userData.data.thisYear.Eau}
              handleChangeEnergie={handleChangeEnergie}
            />
            <GraphCard
              data={userData.data.thisYear.Electricté}
              handleChangeEnergie={handleChangeEnergie}
            />
            <GraphCard
              data={userData.data.thisYear.Gaz}
              handleChangeEnergie={handleChangeEnergie}
            />
            <GraphCard
              data={userData.data.thisYear.Déchêts}
              handleChangeEnergie={handleChangeEnergie}
            />
            <GraphCard
              data={userData.data.thisYear.Transports}
              handleChangeEnergie={handleChangeEnergie}
            />
          </GraphContainerDesktop>
        </>
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

const GraphContainerMobile = styled.div`
  ${media.tablet`
    display: none;
  `}
`

const GraphContainerDesktop = styled.div`
  display: none;

  ${media.tablet`
    display: block;
  `}

  ${media.large`
    display: flex;
    flex-wrap: wrap;
  `}
`
const PageLocationContent = styled(PageLocation)`
  margin-bottom: 15px;
`
