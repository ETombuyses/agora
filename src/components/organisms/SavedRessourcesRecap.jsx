import React from 'react'
import styled from 'styled-components'
import { media } from '../../scss/config/mixins'

// component
import { SavedRessources } from '../molecules/SavedRessourcesTags'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SavedRessourcesRecap = (props) => {
  const tasks = [
    { icon: 'water', name: 'Eau', unit: 'L', savedNumber: props.water },
    {
      icon: 'lightning',
      name: 'Electricité',
      unit: 'Kw/h',
      savedNumber: props.lightning,
    },
    { icon: 'fire', name: 'Gaz', unit: 'Kw/h', savedNumber: props.gas },
    { icon: 'trash', name: 'Déchets', unit: 'kg', savedNumber: props.waste },
    {
      icon: 'bus',
      name: 'Transports',
      unit: 'mois',
      savedNumber: props.transport,
    },
  ]

  return (
    <RecapWrapper>
      <Title>Total</Title>
      <Description>
        Découvrez le total des ressources que vous avez économisé(e) et la durée
        d’activation du pass Navigo depuis la création de votre compte
      </Description>

      <SavedRessourcesList>
        {tasks.map((task) => {
          return (
            <CustomSavedRessource
              key={task.name}
              icon={task.icon}
              unit={task.unit}
              savedNumber={task.savedNumber ? task.savedNumber : 0}
            />
          )
        })}
      </SavedRessourcesList>
    </RecapWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const Title = styled.h2`
  /* font-size: 23px; */
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
  max-width: calc(5 * 200px + 4 * 28px);
`

const SavedRessourcesList = styled.div`
  display: flex;
  flex-direction: column;

  ${media.desktop`
     flex-direction: row;
     overflow: hidden;
  `}
`

const CustomSavedRessource = styled(SavedRessources)`
  :not(:last-child) {
    margin-bottom: 17px;

    ${media.desktop`
      margin-bottom: 0;
      margin-right: 28px;
  `}
  }
`
