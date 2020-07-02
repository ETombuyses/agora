import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// emoticons
import fire from '../../../assets/images/fire.png'
import water from '../../../assets/images/water.png'
import lightning from '../../../assets/images/lightning.png'
import trash from '../../../assets/images/trash.png'
import bus from '../../../assets/images/bus.png'

const images = {
  fire: { icon: fire, name: 'feu' },
  water: { icon: water, name: 'eau' },
  lightning: { icon: lightning, name: 'éclair' },
  trash: { icon: trash, name: 'poubelle' },
  bus: { icon: bus, name: 'bus' },
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const TaskIcon = (props) => {
  return (
    <IconWrapper
      className={props.className}
      color={props.color}
      big={props.big}
    >
      <img
        icon={props.icon}
        src={images[props.icon].icon}
        alt={'emoji ' + images[props.icon].name}
      ></img>
    </IconWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const IconWrapper = styled.div`
  padding: ${(props) => (props.big ? '8px' : '4px')};
  background: ${(props) => props.theme[props.color]};
  display: inline-block;
  border-radius: 5px;

  ${media.desktop`
    padding: ${(props) => (props.big ? '14px' : '4px')};
  `}

  img {
    width: ${(props) => (props.big ? '31px' : '16px')};
    height: ${(props) => (props.big ? '31px' : '16px')};
    display: block;

    ${media.desktop`
      width: ${(props) => (props.big ? '35px' : '16px')};
      height: ${(props) => (props.big ? '35px' : '16px')};
    `}
  }
`
