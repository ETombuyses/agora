import React from 'react'
import styled from 'styled-components'

// icons
import { ReactComponent as AnalyticsIcon } from '../../../assets/icons/menu/analytics.svg'
import { ReactComponent as HistoryIcon } from '../../../assets/icons/menu/clock.svg'
import { ReactComponent as DashboardIcon } from '../../../assets/icons/menu/dashboard.svg'
import { ReactComponent as ProfileIcon } from '../../../assets/icons/menu/profile.svg'
import { ReactComponent as LogoutIcon } from '../../../assets/icons/menu/logout.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const MenuIcon = (props) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'dashboard':
        return <DashboardIcon />
      case 'analytics':
        return <AnalyticsIcon />
      case 'history':
        return <HistoryIcon />
      case 'profile':
        return <ProfileIcon />
      case 'logout':
        return <LogoutIcon />
      default:
        return null
    }
  }

  return (
    <IconWrapper active={props.active}>{renderIcon(props.icon)}</IconWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const IconWrapper = styled.div`
  path {
    stroke: ${(props) => (props.active ? props.theme.green : props.theme.grey)};
  }
`
