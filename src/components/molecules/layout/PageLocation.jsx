import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../../scss/config/mixins'

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
    <div className={props.className}>
      <PageTitle className="heading">{props.location}</PageTitle>
      <Today>
        {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}{' '}
        {date.getFullYear()}
      </Today>
    </div>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageTitle = styled.h1`
  font-size: ${toRem(18)};
  margin-bottom: 5px;
  font-weight: 500;

  ${media.tablet`
    font-size: ${toRem(20)};
  `}

  ${media.desktop`
    font-size: ${toRem(23)};
    margin-bottom: 8px;
  `}

  ${media.large`
  font-size: ${toRem(25)};
  `}
`

const Today = styled.span`
  font-size: ${toRem(13)};

  ${media.tablet`
    font-size: ${toRem(14)};
  `}
`
