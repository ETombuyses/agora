import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Link,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import styled from 'styled-components'

// icons
import { ReactComponent as AnalyticsIcon } from '../..//assets/icons/analytics.svg'
import { ReactComponent as HistoryIcon } from '../../assets/icons/clock.svg'
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'

// Routes
const Dashboard = lazy(() => import('../../routes/Dashboard'))
const Historic = lazy(() => import('../../routes/Historic'))
const Login = lazy(() => import('../../routes/Login'))
const Profile = lazy(() => import('../../routes/Profile'))
const Register = lazy(() => import('../../routes/Register'))
const Stats = lazy(() => import('../../routes/Stats'))



/* -----------------------------------------------------STYLE------------------------------------------------ */

const NavWrapper = styled.nav`
  background: ${(props) => props.theme.white};
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
  color: ${(props) => props.theme.grey};
`


/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Nav = () => {
  const [currentRoute, setCurrentRoute] = React.useState('/')

  function GetNewRoute() {
    let location = useLocation()
    React.useEffect(() => {
      setCurrentRoute(location.pathname)
    }, [location])
  }

  GetNewRoute()


  
  return (
    <div>
      {currentRoute !== '/register' && currentRoute !== '/login' && (
        <NavWrapper>
          <List>
            <ListItem>
              <Link to="/">
                <DashboardIcon />
                <Text>Dashboard</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/historique">
                <HistoryIcon />
                <Text>Historique</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/statistiques">
                <AnalyticsIcon />
                <Text>Analitiques</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/profile">
                <ProfileIcon />
                <Text>Profil</Text>
              </Link>
            </ListItem>
          </List>
        </NavWrapper>
      )}

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
  )
}
