import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../../scss/config/mixins'

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
    <Container text={props.text} className={props.className}>
      <IconWrapper color={props.color} size={props.size}>
        <img
          icon={props.icon}
          src={images[props.icon].icon}
          alt={'emoji ' + images[props.icon].name}
        ></img>
      </IconWrapper>
      {props.text && <span className="energie">{props.text}</span>}
    </Container>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const IconWrapper = styled.div`
  padding: ${(props) => {
    if (props.size === 'big') {
      return '8px'
    } else if (props.size === 'medium') {
      return '10px'
    } else {
      return '4px'
    }
  }};
  background: ${(props) => props.theme[props.color]};
  display: inline-block;
  border-radius: 5px;

  ${media.desktop`
    padding: ${(props) => {
      if (props.size === 'big') {
        return '14px'
      } else if (props.size === 'medium') {
        return '6px'
      } else {
        return '4px'
      }
    }};
  `}

  img {
    width: ${(props) => {
      if (props.size === 'big') {
        return '31px'
      } else if (props.size === 'medium') {
        return '30px'
      } else {
        return '16px'
      }
    }};
    height: ${(props) => {
      if (props.size === 'big') {
        return '31px'
      } else if (props.size === 'medium') {
        return '30px'
      } else {
        return '16px'
      }
    }};
    display: block;

    ${media.desktop`
      width: ${(props) => {
        if (props.size === 'big') {
          return '35px'
        } else if (props.size === 'medium') {
          return '23px'
        } else {
          return '16px'
        }
      }};
      height: ${(props) => {
        if (props.size === 'big') {
          return '35px'
        } else if (props.size === 'medium') {
          return '23px'
        } else {
          return '16px'
        }
      }};
    `}
  }
`

const Container = styled.div`
  position: ${(props) => (props.text ? 'relative' : 'initial')};

  .energie {
    font-weight: 500;
    margin-left: 15px;
    vertical-align: super;
    display: none;

    ${media.desktop`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: inline;
      font-size: ${toRem(19)};
    `}
  }
`
