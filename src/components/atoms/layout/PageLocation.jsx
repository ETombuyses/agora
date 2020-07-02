import React from 'react'
import styled from 'styled-components'

import { media } from '../../../scss/config/mixins'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const PageLocation = (props) => {
  let date = new Date()
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ]
  const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ]

  return (
    <LocationPage className={props.className}>
      <PageTitle>{props.location}</PageTitle>
      <p>
        {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}{' '}
        {date.getFullYear()}
      </p>
    </LocationPage>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const LocationPage = styled.div``
const PageTitle = styled.h1`
  margin-bottom: 5px;
  display: none;
  font-size: 23px;

  ${media.desktop`
    margin-bottom: 8px;
    display: block;
  `}
`
