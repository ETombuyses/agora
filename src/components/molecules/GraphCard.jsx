import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'

// Components
import { TaskIcon } from '../atoms/TaskIcon'
import { SelectEnergie } from '../atoms/SelectEnergie'

function pourcentDesktop(value, decimal) {
  return 150 * (value / decimal) + 'px'
}

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const GraphCard = (props) => {
  const months = [
    { monthShort: 'Janv.', monthLong: 'Janvier' },
    { monthShort: 'Fev.', monthLong: 'Fevrier' },
    { monthShort: 'Mars', monthLong: 'Mars' },
    { monthShort: 'Avr.', monthLong: 'Avril' },
    { monthShort: 'Mai', monthLong: 'Mai' },
    { monthShort: 'Juin', monthLong: 'Juin' },
    { monthShort: 'Juil.', monthLong: 'Juillet' },
    { monthShort: 'Aout', monthLong: 'Août' },
    { monthShort: 'Sep.', monthLong: 'Septembre' },
    { monthShort: 'Oct.', monthLong: 'Octobre' },
    { monthShort: 'Nov.', monthLong: 'Novembre' },
    { monthShort: 'Dec.', monthLong: 'Decembre' },
  ]

  const selectValue = [
    {
      energie: 'water',
      name: 'EAU',
    },
    {
      energie: 'waste',
      name: 'DECHETS',
    },
    {
      energie: 'transport',
      name: 'TRANSPORT',
    },
    {
      energie: 'gas',
      name: 'GAZ',
    },
    {
      energie: 'electricity',
      name: 'ELECTRICITE',
    },
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
        <SelectEnergie data={selectValue} />
        <span>
          <strong>{props.data.nbtaskValidate}</strong> missions
        </span>
      </HeadingWrapper>
      <ContentWrapper>
        {months.map((month, index) => {
          return (
            <div key={month.monthShort}>
              <div>
                <MonthShort>{month.monthShort}</MonthShort>
                <MonthLong>{month.monthLong}</MonthLong>
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

  ${media.large`
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
	padding: 15px 8px 0 8px;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 30px;
	
	span {
		font-weight: 500;
		font-size: ${toRem(15)};
	}

	${media.large`
		span { 
			font-size: ${toRem(16)};

			strong {
				font-size: ${toRem(23)};
			}
		}
	`}
	
	${media.tablet`
		padding: 15px 30px 0 30px;
	`}
}
`

const ContentWrapper = styled.div`
  ${media.tablet`
		display: flex;
	`}

  & > div {
    height: 100px;
    position: relative;
    border-bottom: 3px solid ${(props) => props.theme.greyOpacity};

    &:last-child {
      border-bottom: inherit;
    }

    ${media.tablet`
			border-right: 2px solid ${(props) => props.theme.greyOpacity};
			width: calc(100% / 12);
			min-height: 170px;
			border-bottom: inherit;

			&:last-child {
				border-right: inherit;
			}
		`}
  }

  p {
    font-weight: 500;
  }

  ${media.desktop`
		min-width: inherit;
		padding: inherit;
	`}
`

const BarChart = styled.div`
  margin: auto;
  background-color: ${(props) => props.theme.green};
  position: absolute;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 0;
  bottom: 16px;
  height: 40px;
  width: ${(props) => `calc(98% * ${props.value} / ${props.decimal})`};

  ${media.tablet`
		width: 70%;
		height: ${(props) => pourcentDesktop(props.value, props.decimal)};
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		border-top-left-radius: 5px;
		border-bottom-right-radius: inherit;
	`}
`
const Unit = styled.span`
  position: absolute;
  bottom: 24px;
  left: 8px;
  font-size: ${toRem(15)};
  font-weight: 500;
  color: ${(props) => props.theme.white};

  ${media.tablet`
		color: ${(props) => props.theme.black};
		bottom: -30px;
		left: 50%;
		transform: translateX(-50%);
	`}
`
const MonthShort = styled.p`
  display: none;

  ${media.tablet`
		display: block;
		text-align: center;
		color: ${(props) => props.theme.grey};
		font-size: ${toRem(13)};
	`}
`

const MonthLong = styled.p`
  text-align: left;
  margin-left: 8px;
  font-size: ${toRem(19)};
  color: ${(props) => props.theme.black};
  position: relative;
  top: 14px;

  ${media.tablet`
		display: none
	`}
`
