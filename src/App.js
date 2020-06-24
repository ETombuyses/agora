import React, { Suspense, lazy } from 'react'
import axios from 'axios'

// router
import { BrowserRouter as Router } from 'react-router-dom'

import { Nav } from './components/organisms/Nav'

export default function App() {

  //Timer for refresh Token
  const refreshTokenTimer = () => {
    //get refresh_token in local storage
    let getRefreshToken = localStorage.getItem('refreshToken')

    //check if refresh token exist in local storage
    if (getRefreshToken) {
      //Get new refresh token and token
      (async () => {
        const result = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/token/refresh',
        data: {
          refresh_token: getRefreshToken
        }
      })
      
      let token = result.data.token;
      let refresh_token = result.data.refresh_token;
  
      //Put tokens in local storage
      localStorage.setItem('token', token)
      localStorage.setItem('refreshToken', refresh_token)

      })()
    }
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