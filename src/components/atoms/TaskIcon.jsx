import React from 'react'
import styled from 'styled-components'

// emoticons
import fire from '../../assets/images/fire.png'
import water from '../../assets/images/water.png'
import lightning from '../../assets/images/lightning.png'
import trash from '../../assets/images/trash.png'
import bus from '../../assets/images/bus.png'

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
    <IconWrapper className={props.className} color={props.color}>
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
  padding: 4px;
  background: ${(props) => props.theme[props.color]};
  display: inline-block;
  border-radius: 5px;
  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`
