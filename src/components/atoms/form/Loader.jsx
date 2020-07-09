import React, { forwardRef } from 'react'
import styled, { keyframes, css } from 'styled-components'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Loader = forwardRef((props, ref) => {
  return (
    <LoaderContainer ref={ref} location={props.location}>
      <LoaderContent location={props.location}>
        <LoaderTex>{props.text}</LoaderTex>
        {props.displayed && (
          <LoaderWrapper className="load" location={props.location}>
            <LoaderBar className="load__bar load__bar--1" />
            <LoaderBar className="load__bar load__bar--2" />
            <LoaderBar className="load__bar load__bar--3" />
            <LoaderBar className="load__bar load__bar--4" />
            <LoaderBar className="load__bar load__bar--5" />
          </LoaderWrapper>
        )}
      </LoaderContent>
    </LoaderContainer>
  )
})

/* -----------------------------------------------------STYLE------------------------------------------------ */

function loaderAime() {
  let styles = ''

  for (let i = 1; i < 6; i++) {
    styles += `
      &--${i} {
        animation-delay: ${200 * i}ms;
      }
    `
  }

  return css`
    ${styles}
  `
}

const loaderAnimation = keyframes`
  0% {
    transform: scaleY(0.5);
  }
  100% {
    transform: scaleY(1);
  }
`

const LoaderWrapper = styled.div`
  margin: auto;
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  margin-top: ${(props) => (props.location ? '0px' : '20px')};

  @supports (-ms-flow-from: thingy) {
    /* Edge only */
    justify-content: space-around;
  }

  .load__bar {
    background-color: ${(props) => props.theme.green};
    height: 100%;
    width: 10px;
    animation: ${loaderAnimation} 1000ms backwards infinite ease-in-out
      alternate;

    ${loaderAime()};
  }
`
const LoaderBar = styled.div`
  border-radius: 3px;
`

const LoaderContainer = styled.div`
  display: ${(props) => (props.location ? 'block' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundPopUp};
`

const LoaderContent = styled.div`
  border-radius: 7px;
  padding: 30px 20px;
  background-color: ${(props) => props.theme.white};
  width: ${(props) => (props.location ? '50%' : '70%')};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 0 10px rgba(223, 223, 223, 0.25);
`

const LoaderTex = styled.p``
