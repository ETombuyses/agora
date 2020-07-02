import React from 'react'
import styled from 'styled-components'

// icon
import gas from '../../../assets/icons/tasks/gas.png'
import water from '../../../assets/icons/tasks/water.png'
import lightning from '../../../assets/icons/tasks/lightning.png'
import trash from '../../../assets/icons/tasks/trash.png'
import bus from '../../../assets/icons/tasks/bus.png'

const images = {
  Gaz: { icon: gas, name: 'Gas' },
  Eau: { icon: water, name: 'Eau' },
  Electricté: { icon: lightning, name: 'Electricité' },
  Déchêts: { icon: trash, name: 'Déchêts' },
  transportsIsValidate: { icon: bus, name: 'Transports' },
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const SavedRessourceTag = (props) => {
  return (
    <TagWrapper className={props.className}>
      <img icon={props.icon} src={images[props.icon].icon}></img>
      <TextWrapper>
        <Title icon={props.icon}>{images[props.icon].name}</Title>
        <Stat>12m3</Stat>
      </TextWrapper>
    </TagWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const TagWrapper = styled.div`
  padding: 7px 8px;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => props.theme.greyBlue};

  img {
    width: 22px;
    height: 22px;
    display: inline-block;
    margin-right: 8px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  font-size: 13px;
`

const Stat = styled.span`
  font-weight: 300;
  font-size: 12px;
`
