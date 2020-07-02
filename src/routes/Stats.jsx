import React from 'react'
import styled from 'styled-components'

// components
import { Title } from '../components/atoms/layout/Title'
import { PageLocation } from '../components/molecules/layout/PageLocation'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Stats() {
  return (
    <div className="pageWrapper">
      <CustomPageLocation location="Analytique" />
      <Title text="Missions reussis au total" />
    </div>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const CustomPageLocation = styled(PageLocation)`
  margin-bottom: 15px;
`
