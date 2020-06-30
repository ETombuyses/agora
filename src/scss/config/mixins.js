import { css } from 'styled-components'

/* -------------------------------- px to rem --------------------------------------- */

const baseSize = 16

export const toRem = (px) => {
  return px / baseSize + 'rem'
}

// how to use it with styled-components
// body {
//  font-size: ${toRem(10)};;
// }

/* -------------------------------breakpoints ------------------------------*/

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '992px',
  large: '1200px',
}

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
