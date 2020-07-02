import React from 'react'
import styled from 'styled-components'
import { Title } from '../components/atoms/layout/Title'
import { PageLocation } from '../components/atoms/layout/PageLocation'

export default function Home() {
  return (
    <div className="pageWrapper">
      <CustomPageLocation location="Analytique" />
      <Title text="Missions reussis au total" />
    </div>
  )
}

const CustomPageLocation = styled(PageLocation)`
  margin-bottom: 15px;
`
