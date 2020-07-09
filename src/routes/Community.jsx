import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { media } from '../scss/config/mixins'
import axios from 'axios'
import { apiUrl } from '../apiConfig'
import { getNewTokens } from '../tools/isAuth'

// Components
import { SectionTitle } from '../components/atoms/layout/SectionTitle'
import { PageLocation } from '../components/molecules/layout/PageLocation'
import { GlobalDataCard } from '../components/atoms/GlobalDataCard'
import { GraphCard } from '../components/molecules/GraphCard'

// tasks object
import { tasks } from '../tools/ressources'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Community() {
  const [userData, setUserData] = useState(0)
  const [selectValue, setSelectValue] = useState('water')

  useEffect(() => {
    getNewTokens()

    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      let getuserId = JSON.parse(userInfo).id
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
    }
  }, [])

  const handleChangeEnergie = (e) => {
    setSelectValue(e)
  }

  return (
    <div className="pageWrapper">
      <PageLocationContent location="Communauté" />
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
      <SectionTitle text="Missions réussies au total" />
      {userData.data && userData.data.thisYear.Eau.allTasks.length !== 0 && (
        <>
          <GraphContainerMobile>
            {Object.keys(userData.data.thisYear).map((key) => {
              return (
                selectValue === tasks[key].name && (
                  <GraphCard
                    value={tasks[key].name}
                    data={userData.data.thisYear[key]}
                    handleChangeEnergie={handleChangeEnergie}
                    key={tasks[key].name}
                  />
                )
              )
            })}
          </GraphContainerMobile>
          <GraphContainerDesktop>
            {Object.keys(userData.data.thisYear).map((key) => {
              return (
                <GraphCard
                  data={userData.data.thisYear[key]}
                  handleChangeEnergie={handleChangeEnergie}
                  key={tasks[key].name}
                />
              )
            })}
          </GraphContainerDesktop>
        </>
      )}
      {userData.data && userData.data.thisYear.Eau.allTasks.length === 0 && (
        <NoDataContent>
          <p>
            Les premières missions seront validées le premier février, nous
            comptons sur vous pour valider le plus de missions possible !
          </p>
        </NoDataContent>
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

  ${media.desktop`
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

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
`
const PageLocationContent = styled(PageLocation)`
  margin-bottom: 15px;
`

const NoDataContent = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgba(223, 223, 223, 0.25);
  padding: 13px 10%;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  height: 60vh;
  color: #afafaf;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;

  p {
    background-color: #f5f6fb;
    border-radius: 10px;
    padding: 16px 24px;
  }

  ${media.tablet`
    padding: 13px 20%;
  `}

  ${media.desktop`
    padding: 13px 30%;
  `}
`
