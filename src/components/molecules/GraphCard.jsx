import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'

import { TaskIcon } from '../atoms/TaskIcon'

//transform value in %
/* function pourcent(value, decimal) {
  return (value * 100) / decimal + '%'
} */

function pourcent(value, decimal) {
  return 150 * (value / decimal) + 'px'
}

/* function pourcent(value, decimal) {
  // % de 19 dans 75
  let x = (100 * value) / decimal
  // prix a payer solde
  let y = (decimal * (100 - x)) / 100
  //return marge tache en px
  return decimal - y + 'px'
} */

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const GraphCard = (props) => {
  console.log(props.data)

  //Get current year
  let date = new Date()
  let year = date.getFullYear()

  const months = [
    { month: 'Janv.', date: `${year}-01-01` },
    { month: 'Fev.', date: `${year}-02-01` },
    { month: 'Mars', date: `${year}-03-01` },
    { month: 'Avr.', date: `${year}-04-01` },
    { month: 'Mai', date: `${year}-05-01` },
    { month: 'Juin', date: `${year}-06-01` },
    { month: 'Juil.', date: `${year}-07-01` },
    { month: 'Aout', date: `${year}-08-01` },
    { month: 'Sep.', date: `${year}-09-01` },
    { month: 'Oct.', date: `${year}-10-01` },
    { month: 'Nov.', date: `${year}-11-01` },
    { month: 'Dec.', date: `${year}-12-01` },
  ]

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
          size={'medium'}
          icon={iconEnergie}
          color={'blueGrey'}
          text={props.data.allTasks[0].name}
        />
        <span>
          <strong>{props.data.nbtaskValidate}</strong> missions
        </span>
      </HeadingWrapper>
      <ContentWrapper>
        {months.map((month, index) => {
          return (
            <div key={month.month}>
              <div>
                <p>{month.month}</p>
                {props.data.allTasks[index] && (
                  <BarChart
                    value={props.data.allTasks[index].nbValidateTaskByType}
                    decimal={props.data.nbtaskValidate}
                  />
                )}
              </div>
              {props.data.allTasks[index] && (
                <Unit>{props.data.allTasks[index].nbValidateTaskByType}</Unit>
              )}
            </div>
          )
        })}
      </ContentWrapper>
    </CardWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.primaryShadow};
  align-items: center;
  border-radius: 10px;
  margin-bottom: 40px;
  padding-bottom: 35px;
  overflow-x: scroll;

  ${media.large`
		overflow-x: inherit;
		flex: 1 1 calc(50% - 20px);

		&:nth-child(odd) {
			margin-right: 20px;
		}

		&:nth-child(even) {
			margin-left: 20px;
		}

		&:last-child {
			width: calc(50% - 20px);
			margin: inherit;
			flex: inherit;
		}
	`}
`

const HeadingWrapper = styled.div`
	display: flex;
	padding: 15px 30px 0 30px;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 30px;
	position: sticky;
  left: 0;
	
	span {
		font-weight: 500;
		font-size: ${toRem(15)};
	}

	${media.large`
		position: inherit;
		left: inherit;

		span { 
			font-size: ${toRem(16)};

			strong {
				font-size: ${toRem(23)};
			}
		}
  `}
}
`

const ContentWrapper = styled.div`
  display: flex;
  min-width: 650px;
  padding: 0 5px;

  & > div {
    width: calc(100% / 12);
    border-right: 2px solid ${(props) => props.theme.greyOpacity};
    min-height: 170px;
    position: relative;

    &:last-child {
      border-right: inherit;
    }
  }

  p {
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.grey};
  }

  ${media.desktop`
		min-width: inherit;
		padding: inherit;
	`}
`

const BarChart = styled.div`
  margin: auto;
  width: 70%;
  background-color: ${(props) => props.theme.green};
  height: ${(props) => pourcent(props.value, props.decimal)};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
const Unit = styled.span`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
`
