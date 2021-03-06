import React from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// icons and images
import plant from '../../../assets/images/jungle-plant.png'
import plantx1 from '../../../assets/images/jungle-plantx1.png'
import plantx2 from '../../../assets/images/jungle-plantx2.png'
import leaves from '../../../assets/images/jungle-leaves.png'
import leavesx1 from '../../../assets/images/jungle-leavesx1.png'
import leavesx2 from '../../../assets/images/jungle-leavesx2.png'

// components
import SvgPersona from '../../atoms/layout/SvgPersona'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const WelcomeBanner = (props) => {
  let imageName = ''

  if (localStorage.getItem('userInfo')) {
    const { image } = JSON.parse(localStorage.getItem('userInfo'))
    imageName = image
  }

  return (
    <WelcomeWrapper>
      <LeftPlantWrapper>
        <img
          src={plant}
          srcSet={`${plantx1} 171w,${plantx2} 342w`}
          sizes="100%"
          alt="plante verte"
        />
      </LeftPlantWrapper>
      <LeftLeaves
        src={leaves}
        srcSet={`${leavesx1} 160w, ${leavesx2} 320w`}
        sizes="150px"
        alt="feuilles"
      />
      <TextContent>
        <Title className="heading biggest">Bonjour {props.name}</Title>
        <Text>
          {props.currentLevel === 12
            ? 'Bravo, vous avez atteint le niveau maximum ! '
            : `Il ne vous reste plus que ${
                (props.currentLevel + 1) * 5 - props.completedTasks
              } mission${`s`} pour passer au niveau ${props.currentLevel + 1}`}
        </Text>
      </TextContent>
      <SvgPersona image={imageName} />
      <RightPlantWrapper>
        <img
          src={plant}
          srcSet={`${plantx1} 171w,${plantx2} 342w`}
          sizes="100%"
          alt="plante verte"
        />
      </RightPlantWrapper>
      <RightLeaves
        src={leaves}
        srcSet={`${leavesx1} 160w, ${leavesx2} 320w`}
        sizes="150px"
        alt="feuilles"
      />
    </WelcomeWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const WelcomeWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.grassGreen};
  padding: 9px;
  border-radius: 10px;

  ${media.desktop`
    padding: 35px;
  `}
`
const TextContent = styled.div`
  ${media.desktop`
    margin-left: 30%; 
    margin-right: 13%;
  `}
`

const Title = styled.h2`
  max-width: 68%;
  margin-bottom: 10px;

  ${media.desktop`
    max-width: unset;
    margin-bottom: 24px;
  `}
`

const Text = styled.p`
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
