import React from 'react'
import { withTheme } from 'styled-components'
import styled from 'styled-components'

const CicleWrapper = styled.div`
  position: relative;
`

const Percent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`

const Circle = (props) => {
  return (
    <CicleWrapper>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="white"
        style={{ transform: 'rotate(-90deg)', strokeLinecap: 'round' }}
      >
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke={props.theme.whiteTransparent}
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke={props.theme.white}
          strokeWidth="12"
          strokeDasharray="339.292"
          strokeDashoffset="135.717"
        />
      </svg>
      <Percent>60%</Percent>
    </CicleWrapper>
  )
}

const ProgressCircle = withTheme(Circle)

export { ProgressCircle }
