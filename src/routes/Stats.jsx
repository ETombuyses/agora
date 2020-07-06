import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { media } from '../scss/config/mixins'
import axios from 'axios'
import { apiUrl } from '../tools/apiConfig'

// Components
import { Title } from '../components/atoms/layout/Title'
import { PageLocation } from '../components/molecules/layout/PageLocation'
import { GlobalDataCard } from '../components/atoms/GlobalDataCard'
import { GraphCard } from '../components/molecules/GraphCard'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Stats() {
  const [userData, setUserData] = useState(0)
  const [selectValue, setSelectValue] = useState('water')

  useEffect(() => {
    let getuserId = localStorage.getItem('idUser')
    let getToken = localStorage.getItem('token')

    ;(async () => {
      const result = await axios({
        method: 'get',
        url: `${apiUrl}/api/user/analytics/${getuserId}`,
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
      {userData.data && userData.data.thisYear.Eau.allTasks.length !== 0 && (
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
                data={userData.data.thisYear.Déchets}
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
              data={userData.data.thisYear.Déchets}
              handleChangeEnergie={handleChangeEnergie}
            />
            <GraphCard
              data={userData.data.thisYear.Transports}
              handleChangeEnergie={handleChangeEnergie}
            />
          </GraphContainerDesktop>
        </>
      )}
      {userData.data && userData.data.thisYear.Eau.allTasks.length === 0 && (
        <p>Il n'y a pas de données à afficher</p>
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
