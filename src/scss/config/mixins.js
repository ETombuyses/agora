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
  large: '1800px',
  height: '450px',
}

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const mediaSpe = Object.keys(breakpoints).reduce(
  (accumulator, label1, label2) => {
    accumulator[label1] = (...args) => css`
      @media (min-width: ${breakpoints[label1]}) and (min-width: ${breakpoints[
          label2
        ]}) and {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
