import React, { Suspense, lazy } from 'react'
import { Link, Switch, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { media } from '../../scss/config/mixins'

// icons
import { MenuIcon } from '../atoms/MenuIcon'

// Routes
const Dashboard = lazy(() => import('../../routes/Dashboard'))
const History = lazy(() => import('../../routes/History'))
const Stats = lazy(() => import('../../routes/Stats'))
const Profile = lazy(() => import('../../routes/Profile'))

const Login = lazy(() => import('../../routes/Login'))
const Register = lazy(() => import('../../routes/Register'))

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

const NavWithTheme = (props) => {
  const pages = [
    { route: '/', name: 'Dashboard', icon: 'dashboard', component: Dashboard },
    {
      route: '/historique',
      name: 'Historique',
      icon: 'history',
      component: History,
    },
    {
      route: '/statistiques',
      name: 'Analytiques',
      icon: 'analytics',
      component: Stats,
    },
    { route: '/profil', name: 'Profil', icon: 'profile', component: Profile },
    { route: '/login', component: Login },
    { route: '/register', component: Register },
  ]

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
            {pages.map((page) => {
              if (page.icon)
                return (
                  <ListItem key={page.route}>
                    <Link
                      to={page.route}
                      className={
                        currentRoute === page.route ? 'currentPage' : ''
                      }
                    >
                      <MenuIcon
                        icon={page.icon}
                        active={currentRoute === page.route}
                      />
                      <Text
                        style={{
                          color:
                            currentRoute === page.route
                              ? props.theme.green
                              : props.theme.grey,
                        }}
                      >
                        {page.name}
                      </Text>
                    </Link>
                  </ListItem>
                )
              else return null
            })}
            <ListItem>
              <Link to="/login">text login</Link>
            </ListItem>
            <ListItem>
              <Link to="/register">text register</Link>
            </ListItem>
          </List>
        </NavWrapper>
      )}

      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          {pages.map((page) => {
            return (
              <Route
                exact
                key={page.route}
                path={page.route}
                component={page.component}
              />
            )
          })}
        </Switch>
      </Suspense>
    </div>
  )
}

const Nav = withTheme(NavWithTheme)

export { Nav }

/* -----------------------------------------------------STYLE------------------------------------------------ */

const NavWrapper = styled.nav`
  background: ${(props) => props.theme.white};
  padding: 12px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;

  ${media.desktop`
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    width: 10%;
	`}
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${media.desktop`
    flex-direction: column;
    justify-content: center;
	`}
`

const ListItem = styled.li`
  a {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.desktop`
    ::before {
      position: absolute;
      content: '';
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 0px;
      background: ${(props) => props.theme.green};
      transition: height 0.3s ease;
    }

    &.currentPage::before {
      height: 44px;
    }
	`}
  }

  ${media.desktop`
      width: 50px;
	`}

  :not(:last-child) {
    ${media.desktop`
      margin-bottom: 55px;
	  `}
  }
`

const Text = styled.span`
  font-size: 10px;
  margin-top: 6px;
  color: ${(props) => props.theme.grey};
`
