import React from 'react'
import styled from 'styled-components'

import user from '../../assets/images/user.png'
import task from '../../assets/images/task.png'

const images = {
  user: { icon: user, name: 'tête' },
  task: { icon: task, name: 'tâche' },
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const GlobalDataCard = (props) => {
  return (
    <DataWrapper>
      <IconImg
        icon={props.icon}
        src={images[props.icon].icon}
        alt={'emoji ' + images[props.icon].name}
      />
      <DataNumber className="heading small">{props.number}</DataNumber>
      <span>{props.unit}</span>
    </DataWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const DataWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.primaryShadow};
  padding: 13px 30px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;

  .small {
    margin: 0 8px;
  }
`

const DataNumber = styled.span`
  text-transform: uppercase;
`

const IconImg = styled.img`
  height: 35px;
  width: 35px;
  vertical-align: middle;
`
