import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'

import { TaskIcon } from '../atoms/TaskIcon'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const GraphCard = (props) => {
  console.log(props.data)

  let iconEnergie

  if (props.data.allTasks[0].name === 'Eau') {
    iconEnergie = 'water'
  } else if (props.data.allTasks[0].name === 'Gaz') {
    iconEnergie = 'fire'
  } else if (props.data.allTasks[0].name === 'Transports') {
    iconEnergie = 'bus'
  } else if (props.data.allTasks[0].name === 'Déchêts') {
    iconEnergie = 'trash'
  } else {
    iconEnergie = 'lightning'
  }

  return (
    <CardWrapper>
      <HeadingWrapper>
        <TaskIcon
          icon={iconEnergie}
          color={'white'}
          text={props.data.allTasks[0].name}
        />
        <span>
          <strong>{props.data.nbtaskValidate}</strong> missions
        </span>
      </HeadingWrapper>
    </CardWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.primaryShadow};
  padding: 13px 30px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`

const HeadingWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	
	span {
		font-weight: 500;
		font-size: ${toRem(15)};
	}

	${media.desktop`
		span { 
			font-size: ${toRem(16)};

			strong {
				font-size: ${toRem(23)};
			}
		}
  `}
}
`
