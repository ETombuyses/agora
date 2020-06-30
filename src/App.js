import React, { useEffect } from 'react'
import { getNewTokens } from './tools/isAuth'

// router
import { BrowserRouter as Router } from 'react-router-dom'

import { Nav } from './components/organisms/Nav'

export default function App() {
  useEffect(() => {
    let token = localStorage.getItem('token')
    let url = window.location.pathname

    // if (!token && url !== '/register' && url !== '/login') {
    //   window.location.href = '/login'
    // }
  })

  //Timer for refresh Token
  const refreshTokenTimer = () => {
    //function from isAuth.js (Get news tokens if user is recognized)
    getNewTokens()
  }

  //Refresh Token every 10 mins
  setInterval(refreshTokenTimer, 600000)

  return (
    <Router>
      <Nav />
    </Router>
  )
}
