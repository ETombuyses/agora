import React from 'react'

// router
import { BrowserRouter as Router } from 'react-router-dom'

import { Nav } from './components/organisms/Nav'


export default function App() {
  return (
    <Router>
        <Nav />
    </Router>
  )
}
