import React from 'react'
import styled from 'styled-components'

import { ReactComponent as AnalyticsIcon } from '../../assets/icons/analytics.svg'
import { ReactComponent as HistoryIcon } from '../../assets/icons/clock.svg'
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'

const IconWrapper = styled.div`
  path {
    stroke: ${(props) => (props.active ? props.theme.green : props.theme.grey)};
  }
`

export const MenuIcon = (props) => {
  if (props.icon === 'dashboard') {
    return (
      <IconWrapper active={props.active}>
        <DashboardIcon></DashboardIcon>
      </IconWrapper>
    )
  } else if (props.icon === 'analytics') {
    return (
      <IconWrapper active={props.active}>
        <AnalyticsIcon></AnalyticsIcon>
      </IconWrapper>
    )
  } else if (props.icon === 'history') {
    return (
      <IconWrapper active={props.active}>
        <HistoryIcon></HistoryIcon>
      </IconWrapper>
    )
  } else if (props.icon === 'profile') {
    return (
      <IconWrapper active={props.active}>
        <ProfileIcon></ProfileIcon>
      </IconWrapper>
    )
  }
}
