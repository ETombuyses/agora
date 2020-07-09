import React from 'react'
import styled from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'

// Components
import { TaskIcon } from '../atoms/task/Icon'
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
    { energie: 'water', name: 'EAU' },
    { energie: 'waste', name: 'DECHETS' },
    { energie: 'transport', name: 'TRANSPORT' },
    { energie: 'gas', name: 'GAZ' },
    { energie: 'electricity', name: 'ELECTRICITE' },
  ]

  let iconEnergie

  if (props.data.allTasks[0].name === 'Eau') {
    iconEnergie = 'water'
  } else if (props.data.allTasks[0].name === 'Gaz') {
    iconEnergie = 'fire'
  } else if (props.data.allTasks[0].name === 'Transports') {
    iconEnergie = 'bus'
  } else if (props.data.allTasks[0].name === 'Déchets') {
    iconEnergie = 'trash'
  } else {
    iconEnergie = 'lightning'
  }

  return (
    <CardWrapper>
      <HeadingWrapper>
        <TaskIconWrapper
          size={'medium'}
          icon={iconEnergie}
          color={'greyBlue'}
          text={props.data.allTasks[0].name}
        />
        <SelectEnergie
          data={selectValue}
          value={props.value}
          handleChangeEnergie={props.handleChangeEnergie}
        />
        <NbTasks>
          <strong>{props.data.nbtaskValidate}</strong> missions
        </NbTasks>
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

  @media screen and (min-width: 1200px) {
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
  }

  ${media.tablet`
    display: block;
  `}
`

const HeadingWrapper = styled.div`
  display: flex;
  padding: 15px 8px 0 8px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;

  span {
    font-weight: 500;
  }

  ${media.tablet`
    flex-wrap: inherit;
		padding: 15px 30px 0 30px;
	`}
`

const ContentWrapper = styled.div`
  ${media.tablet`
		display: flex;
	`}

  & > div {
    height: 100px;
    position: relative;
    border-bottom: 3px solid ${(props) => props.theme.lightGrey};

    &:last-child {
      border-bottom: inherit;
    }

    ${media.tablet`
			border-right: 2px solid ${(props) => props.theme.lightGrey};
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
  font-weight: 500;
  color: ${(props) => props.theme.white};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.tablet`
		color: ${(props) => props.theme.black};
		bottom: -30px;
		left: 50%;
		transform: translateX(-50%);
	`}
`
const MonthShort = styled.p`
  display: none;
  color: ${(props) => props.theme.grey};
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.tablet`
		display: block;
		text-align: center;
		font-size: ${toRem(13)};
	`}
`

const MonthLong = styled.p`
  text-align: left;
  margin-left: 8px;
  font-size: ${toRem(16)};
  color: ${(props) => props.theme.grey};
  position: relative;
  top: 14px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;

  ${media.tablet`
		display: none
	`}
`

const NbTasks = styled.span`
  flex: 1 1 50%;
  font-size: ${toRem(14)};
  margin-top: 16px;

  strong {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: ${toRem(19)};
  }

  ${media.tablet`
    flex: inherit;
    margin-top: inherit;
    font-size: ${toRem(16)};

    strong {
      font-size: ${toRem(23)};
    }
  `}
`
const TaskIconWrapper = styled(TaskIcon)`
  /* flex: 1 1 50%; */
`
