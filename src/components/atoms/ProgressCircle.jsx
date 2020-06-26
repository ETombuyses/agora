import React from 'react'
import { withTheme } from 'styled-components'
import styled from 'styled-components'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const CicleWrapper = styled.div`
  position: relative;

  svg circle {
    transition: stroke-dashoffset 2s ease;
  }
`

const Percent = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: ${(props) => props.theme.white};
`
/* -----------------------------------------------------COMPONENT------------------------------------------------ */

const Circle = (props) => {
  const radius = 54
  const circumference = radius * 2 * Math.PI

  // function memorised by useCallback --> does not create a new calculateOffset function at every render
  const calculateOffset = React.useCallback(
    (progress) => {
      return circumference - (progress / 100) * circumference
    },
    [circumference]
  )

  const [offset, setOffset] = React.useState(calculateOffset(0))

  React.useEffect(() => {
    setOffset(calculateOffset(props.progress))
  }, [calculateOffset, props.progress])

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
          r={radius}
          fill="none"
          stroke={props.theme.whiteTransparent}
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={props.theme.white}
          strokeWidth="12"
          strokeDasharray="339.292"
          strokeDashoffset={offset}
        />
      </svg>
      <Percent>{props.progress}%</Percent>
    </CicleWrapper>
  )
}

const ProgressCircle = withTheme(Circle)

export { ProgressCircle }
