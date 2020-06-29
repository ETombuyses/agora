import React from 'react'
import styled from 'styled-components'

import { Title } from '../components/atoms/Title'
import { PageLocation } from '../components/atoms/PageLocation'
import { GlobalDataCard } from '../components/atoms/GlobalDataCard'
import { TaskIcon } from '../components/atoms/TaskIcon'

import { media } from '../scss/config/mixins'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Home() {
  return (
    <div className="pageWrapper">
      <PageLocation location="Analytique" />
      <GlobalDataCardWrapper>
        <GlobalDataCard icon={'user'} number={'53 739 096'} unit={'missions'} />
        <GlobalDataCard
          icon={'task'}
          number={'1 786 765'}
          unit={'utilisateurs'}
        />
      </GlobalDataCardWrapper>
      <Title text="Missions reussis au total" />
      <TaskIcon icon={'water'} color={'green'} />
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
