import React from 'react'
import styled from 'styled-components'

import hello from '../../assets/images/hello-mobile.png'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const WelcomeBanner = () => {
  return (
    <WelcomeWrapper>
      <Title className="heading">Bonjour Jean-Phillipe</Title>
      <Text>Il ne vous reste plus que 3 missions pour passer au niveau 2.</Text>
      <img src={hello} alt="dessin d'un jeune garçon avec un ordinateur"></img>
    </WelcomeWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const WelcomeWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.green};
  padding: 9px;
  border-radius: 10px;
  font-size: 23px;

  img {
    position: absolute;
    width: auto;
    height: calc(100% + 9px);
    bottom: 0;
    right: 0;
    border-radius: 9px;
    max-height: 140px;
  }
`

const Title = styled.h2`
  font-size: 20px;
  max-width: calc(100% - 60px);
  margin-bottom: 27px;
`

const Text = styled.h2`
  font-size: 12px;
  max-width: calc(100% - 43%);
`
