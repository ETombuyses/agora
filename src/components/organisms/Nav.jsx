import React, { Suspense, lazy } from 'react'
import { Link, Switch, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { media } from '../../scss/config/mixins'

// icons
import { MenuIcon } from '../atoms/MenuIcon'

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

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

const NavWithTheme = (props) => {
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
              <Link
                to="/"
                className={currentRoute === '/' ? 'currentPage' : ''}
              >
                <MenuIcon icon={'dashboard'} active={currentRoute === '/'} />
                <Text
                  style={{
                    color:
                      currentRoute === '/'
                        ? props.theme.green
                        : props.theme.grey,
                  }}
                >
                  Dashboard
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/historique"
                className={currentRoute === '/historique' ? 'currentPage' : ''}
              >
                <MenuIcon
                  icon={'history'}
                  active={currentRoute === '/historique'}
                />
                <Text
                  style={{
                    color:
                      currentRoute === '/historique'
                        ? props.theme.green
                        : props.theme.grey,
                  }}
                >
                  Historique
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/statistiques"
                className={
                  currentRoute === '/statistiques' ? 'currentPage' : ''
                }
              >
                <MenuIcon
                  icon={'analytics'}
                  active={currentRoute === '/statistiques'}
                />
                <Text
                  style={{
                    color:
                      currentRoute === '/statistiques'
                        ? props.theme.green
                        : props.theme.grey,
                  }}
                >
                  Analitiques
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/profile"
                className={currentRoute === '/profile' ? 'currentPage' : ''}
              >
                <MenuIcon
                  icon={'profile'}
                  active={currentRoute === '/profile'}
                />
                <Text
                  style={{
                    color:
                      currentRoute === '/profile'
                        ? props.theme.green
                        : props.theme.grey,
                  }}
                >
                  Profil
                </Text>
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
// export const Nav = NavWithTheme

const Nav = withTheme(NavWithTheme)

export { Nav }
