import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// icons
import gas from '../../../assets/icons/tasks/gas.png'
import water from '../../../assets/icons/tasks/water.png'
import lightning from '../../../assets/icons/tasks/lightning.png'
import trash from '../../../assets/icons/tasks/trash.png'
import bus from '../../../assets/icons/tasks/bus.png'

const images = {
  fire: { icon: gas, name: 'feu' },
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
