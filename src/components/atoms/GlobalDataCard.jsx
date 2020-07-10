import React from 'react'
import styled from 'styled-components'

import user from '../../assets/images/userCommunity/userx1.png'
import task from '../../assets/images/taskCommunity/taskx1.png'
import userx2 from '../../assets/images/userCommunity/userx2.png'
import taskx2 from '../../assets/images/taskCommunity/taskx2.png'

const images = {
  user: { icon: user, name: 'tête', iconx2: userx2 },
  task: { icon: task, name: 'tâche', iconx2: taskx2 },
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const GlobalDataCard = (props) => {
  return (
    <DataWrapper>
      <IconImg
        icon={props.icon}
        src={images[props.icon].icon}
        srcSet={`${images[props.icon].iconx2} 100w`}
        sizes="35px"
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
  justify-content: flex-start;

  span {
    font-weight: 500;
  }
`

const DataNumber = styled.span`
  text-transform: uppercase;
  margin: 0 8px;
`

const IconImg = styled.img`
  height: 35px;
  width: 35px;
  vertical-align: middle;
`
