import React from 'react'
import styled from 'styled-components'

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
    <LocationPage>
      <p>{props.location}</p>
      <p>
        {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}{' '}
        {date.getFullYear()}
      </p>
    </LocationPage>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const LocationPage = styled.div`
  margin: 16px 0 15px 0;

  p:first-child {
    margin-bottom: 5px;
  }
`
