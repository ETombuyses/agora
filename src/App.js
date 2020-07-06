import React, { useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'

// tools
import { getNewTokens } from './tools/isAuth'

// components
import { Nav } from './components/organisms/Nav'

// acess environment variables
require('dotenv').config()

export default function App() {
  useEffect(() => {
    getNewTokens()

    const token = localStorage.getItem('token')
    const url = window.location.pathname

    if (!token && url !== '#/register' && url !== '#/login') {
      window.location.href = '#/login'
    }
  })

  // Timer for refresh Token
  const refreshTokenTimer = () => {
    // Get news tokens if user is recognized
    getNewTokens()
  }

  // Refresh Token every 10 mins
  // TODO: to fix !!!!
  setInterval(refreshTokenTimer, 600000)

  return (
    <Router>
      <Nav />
    </Router>
  )
}
