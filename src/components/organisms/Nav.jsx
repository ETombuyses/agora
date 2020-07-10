import React, { Suspense, lazy } from 'react'
import { Link, Switch, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { media, toRem } from '../../scss/config/mixins'
import { logout } from '../../tools/isAuth'

// component
import { MenuIcon } from '../atoms/layout/MenuIcon'
import { Loader } from '../atoms/form/Loader'

// logo
import logo from '../../assets/agora-logo.png'
import logox2 from '../../assets/agora-logox2.png'
import logox1 from '../../assets/agora-logox1.png'

// Routes
const Dashboard = lazy(() => import('../../routes/Dashboard'))
const History = lazy(() => import('../../routes/History'))
const Community = lazy(() => import('../../routes/Community'))
//const Profile = lazy(() => import('../../routes/Profile'))
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
      route: '/communaute',
      name: 'Communauté',
      icon: 'analytics',
      component: Community,
    },
    //{ route: '/profil', name: 'Profil', icon: 'profile', component: Profile },
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

  const handleClick = () => {
    logout()
  }

  function NoMatch() {
    window.location.hash = '/login'
    return 'page not found'
  }

  return (
    <div>
      {currentRoute !== '/register' && currentRoute !== '/login' && (
        <NavWrapper>
          <MenuWrapper>
            <Logo
              src={logo}
              srcSet={`${logox1} 121w, ${logox2} 241w`}
              sizes="60%"
              alt="logo agora"
            />
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
                <LogoutWrapper onClick={handleClick}>
                  <MenuIcon icon={'logout'} />
                  <Text>Déconnexion</Text>
                </LogoutWrapper>
              </ListItem>
            </List>
          </MenuWrapper>
        </NavWrapper>
      )}
      <Suspense fallback={<Loader displayed={true} location={true} />}>
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
          <Route path="*">
            <NoMatch />
          </Route>
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
  padding: 12px 0px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;

  ${media.desktop`
    top: 0;
    left: 0;
    width: 15%;
	`}
`
const MenuWrapper = styled.div`
  position: relative;
  height: 100%;

  ${media.desktop`
    display: flex;
    justify-content: center;
  `}
`

const Logo = styled.img`
  position: absolute;
  display: none;
  width: 60%;
  left: 0;
  margin-top: 10%;
  margin-left: 10%;

  ${media.desktop`
    display: block;
  `}
`

const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  @supports (-ms-flow-from: thingy) {
    /* Edge only */
    justify-content: space-around;
  }

  ${media.desktop`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
	`}
`

const ListItem = styled.li`
  a {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.desktop`
      flex-direction: row;

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

  :not(:last-child) {
    ${media.desktop`
      margin-bottom: 55px;
	  `}
  }

  :last-child {
    ${media.desktop`
      position: absolute;
      bottom: 10px;
	  `}
  }
`

const Text = styled.span`
  display: none;
  margin-top: 6px;
  color: ${(props) => props.theme.grey};

  ${media.mobile`
    display: block;
    font-size: ${toRem(13)};
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  `}

  ${media.desktop`
    font-size: ${toRem(15)};
    margin-top: 0;
    margin-left: 16px;
	`}
`

const LogoutWrapper = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  ${media.desktop`
    flex-direction: row;
    bottom: inherit;
  `};
`
