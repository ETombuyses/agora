import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { HashRouter as Router } from 'react-router-dom'

// tools
import { getNewTokens } from './tools/isAuth'

// components
import { Nav } from './components/organisms/Nav'
import { Modal } from './components/molecules/layout/Modal'

// acess environment variables
require('dotenv').config()

/* -----------------------------------------------------JSX------------------------------------------------ */

export default function App() {
  const modal = useRef(null)

  useEffect(() => {
    getNewTokens()
  })

  const onClickModal = () => {
    modal.current.style.display = 'none'
  }

  // Timer for refresh Token
  const refreshTokenTimer = () => {
    // Get news tokens if user is recognized
    getNewTokens()
  }

  // Refresh Token every 10 mins
  setInterval(refreshTokenTimer, 600000)

  return (
    <Router>
      <>
        <Nav />
        <ModalDisclaimer
          onClose={onClickModal}
          ref={modal}
          text={
            "<p class='disclaimerTitle'>Disclaimer</p><br>Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié"
          }
        />
      </>
    </Router>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const ModalDisclaimer = styled(Modal)`
  visibility: visible;
  z-index: 101;
`
