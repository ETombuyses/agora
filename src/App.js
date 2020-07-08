import React, { useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'

// tools
import { getNewTokens } from './tools/isAuth'

// components
import { Nav } from './components/organisms/Nav'

// acess environment variables
require('dotenv').config()

/* -----------------------------------------------------JSX------------------------------------------------ */

export default function App() {
  useEffect(() => {
    getNewTokens()
  })

  // Timer for refresh Token
  const refreshTokenTimer = () => {
    // Get news tokens if user is recognized
    getNewTokens()
  }

  // Refresh Token every 10 mins
  setInterval(refreshTokenTimer, 10000)
  //600000

  return (
    <Router>
      <Nav />
    </Router>
  )
}
