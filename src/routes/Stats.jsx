import React from 'react'
import { Title } from '../components/atoms/Title'
import { PageLocation } from '../components/atoms/PageLocation'

export default function Home() {
  return (
    <div className="pageWrapper">
      <PageLocation location="Analytique" />
      <Title text="Missions reussis au total" />
    </div>
  )
}
