import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// icons and images
import { ReactComponent as Persona } from '../../../assets/images/profile/persona.svg'
import plant from '../../../assets/images/jungle-plant.png'
import leaves from '../../../assets/images/jungle-leaves.png'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const WelcomeBanner = (props) => {
  return (
    <WelcomeWrapper>
      <LeftPlantWrapper>
        <img src={plant} alt="plante verte" />
      </LeftPlantWrapper>
      <LeftLeaves src={leaves} alt="feuilles" />
      <TextContent>
        <Title className="heading">Bonjour {props.name}</Title>
        <Text>
          {props.currentLevel === 12
            ? 'Bravo, vous avez atteint le niveau maximum ! '
            : `Il ne vous reste plus que ${
                (props.currentLevel + 1) * 5 - props.completedTasks
              } mission${`s`} pour passer au niveau ${props.currentLevel + 1}`}
        </Text>
      </TextContent>
      <Persona />
      <RightPlantWrapper>
        <img src={plant} alt="plante verte" />
      </RightPlantWrapper>
      <RightLeaves src={leaves} alt="feuilles" />
    </WelcomeWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const WelcomeWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.grassGreen};
  padding: 9px;
  border-radius: 10px;
  font-size: 23px;

  ${media.desktop`
    padding: 35px;
  `}

  svg {
    position: absolute;
    width: 38%;
    height: auto;
    max-height: calc(100% + 20px);
    bottom: 0;
    right: 0;
    border-radius: 9px;
    transform: scaleX(-1);

    ${media.desktop`
      transform: none;
      right: unset;
      left: 10%;
      width: unset;
      max-width: 20%;
      height: calc(100% + 10px);
      min-height: calc(100% + 40px);
    `}
  }
`
const TextContent = styled.div`
  ${media.desktop`
    margin-left: 30%; 
    margin-right: 15%;
  `}
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  max-width: 68%;
  margin-bottom: 27px;

  ${media.desktop`
    max-width: unset;
  `}
`

const Text = styled.h2`
  font-size: 12px;
  max-width: calc(100% - 43%);

  ${media.desktop`
    max-width: unset;
  `}
`

// left
const LeftPlantWrapper = styled.div`
  display: none;
  overflow: hidden;
  position: absolute;
  border-radius: 10px;
  width: 14%;
  max-width: 150px;
  bottom: 0;
  left: 0;

   ${media.desktop`
    display: inline-block;
  `}
    img {
    width: 100%;
    height: auto;
    transform: translate(-25px, 26px) rotate(35deg);
  }
`

const LeftLeaves = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 14%;
  max-width: 150px;
  height: auto;
  transform: translate(-16px,-2px) rotate(35deg);

   ${media.desktop`
    display: block;
  `}
`

// right
const RightPlantWrapper = styled.div`
  display: none;
  overflow: hidden;
  position: absolute;
  border-radius: 10px;
  width: 20%;
  max-width: 150px;
  top: 0;
  right: 0;

   ${media.desktop`
    display: inline-block;
  `}
    img {
    width: 100%;
    height: auto;
    transform: translate(32px, -21px) rotate(-35deg);
  }
`

const RightLeaves = styled.img`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  max-width: 150px;
  height: auto;
  transform: translate(20px, -20px) rotate(-35deg);
   
    ${media.desktop`
      display: block;
    `}
   
`
