import React, { Suspense, lazy } from 'react'
import axios from 'axios'
import { getNewTokens } from './tools/isAuth'

// router
import { BrowserRouter as Router } from 'react-router-dom'

import { Nav } from './components/organisms/Nav'

export default function App() {

  //Timer for refresh Token
  const refreshTokenTimer = () => {

    //function from isAuth.js (Get news tokens if user is recognized)
    getNewTokens()
  }

  //Refresh Token every 10 mins
  setInterval(refreshTokenTimer, 600000)

  return (
    <Router>
      <div className="App">
        <Nav/>
      </div>
    </Router>
  )
}