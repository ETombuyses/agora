import React from 'react'
import styled from 'styled-components'

// svg icons
import { ReactComponent as AnalyticsIcon } from '../../assets/icons/analytics.svg'
import { ReactComponent as HistoryIcon } from '../../assets/icons/clock.svg'
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const IconWrapper = styled.div`
  path {
    stroke: ${(props) => (props.active ? props.theme.green : props.theme.grey)};
  }
`
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
    }
  }

  return (
    <IconWrapper active={props.active}>{renderIcon(props.icon)}</IconWrapper>
  )
}
