import React from 'react'
import styled from 'styled-components'

import { SavedRessource } from '../molecules/SavedRessource'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SavedRessourcesRecap = () => {
  const tasks = [
    { icon: 'water', name: 'Eau', unit: 'L', savedNumber: '999' },
    {
      icon: 'lightning',
      name: 'Electricité',
      unit: 'Kw/h',
      savedNumber: '999',
    },
    { icon: 'fire', name: 'Gaz', unit: 'Kw/h', savedNumber: '99' },
    { icon: 'trash', name: 'Déchêts', unit: 'kg', savedNumber: '8799' },
    { icon: 'bus', name: 'Transports', unit: 'gCO2', savedNumber: '999' },
  ]

  return (
    <RecapWrapper>
      <Title>Total</Title>
      <Description>
        Découvrez le total des ressources que vous avez économisé(e) depuis la
        création de votre compte
      </Description>

      {tasks.map((task) => {
        return (
          <CustomSavedRessource
            key={task.name}
            icon={task.icon}
            unit={task.unit}
            savedNumber={task.savedNumber}
          />
        )
      })}
    </RecapWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const Title = styled.h2`
  font-size: 23px;
  font-weight: normal;
  margin-bottom: 10px;
`

const Description = styled.p`
  margin-bottom: 16px;
`

const RecapWrapper = styled.div`
  padding: 24px 16px;
  background: ${(props) => props.theme.white};
  border-radius: 10px;
`

const CustomSavedRessource = styled(SavedRessource)`
  :not(:last-child) {
    margin-bottom: 17px;
  }
`