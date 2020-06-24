import React, { Suspense, lazy } from 'react'

// router
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'

import styled from 'styled-components'

import {ReactComponent as AnalyticsIcon} from './assets/icons/analytics.svg'
import {ReactComponent as HistoryIcon} from './assets/icons/clock.svg'
import {ReactComponent as DashboardIcon} from './assets/icons/dashboard.svg'
import {ReactComponent as ProfileIcon} from './assets/icons/profile.svg'

const NavWrapper = styled.nav`
background: ${props => props.theme.white};
padding: 12px;
width: 100%;
position: fixed;
bottom: 0;
`

const List = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`

const ListItem = styled.li`
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`

const Text = styled.span`
font-size: 10px;
margin-top: 6px;
color: ${props => props.theme.grey};
`

// Rooter
const Dashboard = lazy(() => import('./routes/Dashboard'))
const Historic = lazy(() => import('./routes/Historic'))
const Login = lazy(() => import('./routes/Login'))
const Profile = lazy(() => import('./routes/Profile'))
const Register = lazy(() => import('./routes/Register'))
const Stats = lazy(() => import('./routes/Stats'))

export default function App() {

  function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
      console.log('location', location)
      if (location.pathname === 'register' || location.pathname === 'register') {
        console.log('lcoation etst', location.pathname)
      }
    }, [location]);
  }

  usePageViews()

  return (
    <Router>
      <div className="App">
        {  true && 
        <NavWrapper>
              <List>
                <ListItem>
                  <Link to="/">
                    <DashboardIcon/>
                    <Text>Dashboard</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/historique">
                    <HistoryIcon/>
                    <Text>Historique</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/statistiques">
                    <AnalyticsIcon/>
                    <Text>Analitiques</Text>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/profile">
                    <ProfileIcon/>
                    <Text>Profil</Text>
                  </Link>
                </ListItem>
              </List>
        </NavWrapper>}

        <Suspense fallback={<div>Chargement...</div>}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/historique" component={Historic} />
            <Route path="/statistiques" component={Stats} />
            <Route path="/parametres" component={Profile} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

