import React, { forwardRef } from 'react'
import styled from 'styled-components'

// icon
import { ReactComponent as crossIcon } from '../../../assets/icons/layout/cross.svg'
import { toRem } from '../../../scss/config/mixins'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const Modal = forwardRef((props, ref) => {
  return (
    <PopUpWrapper ref={ref} className={props.className} onClick={props.onClose}>
      <PopUpContainer size={props.size} registerPopUp={props.registerPopUp}>
        <Cross />
        <PopUpContent
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></PopUpContent>
      </PopUpContainer>
    </PopUpWrapper>
  )
})

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PopUpWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPopUp};
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;

  .disclaimerTitle {
    font-size: ${toRem(18)};
    font-weight: 500;
    color: ${(props) => props.theme.red};
  }
`

const PopUpContainer = styled.div`
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 30px 20px;
  background-color: ${(props) => props.theme.white};
  width: 70%;
  position: relative;
  top: 50%;
  left: ${(props) => (props.registerPopUp ? 'calc(50% - 24px);' : '50%')};
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 0 10px rgba(223, 223, 223, 0.25);
`

const PopUpContent = styled.p`
  font-weight: normal;
  color: ${(props) => props.theme.black};
`

const Cross = styled(crossIcon)`
  position: absolute;
  width: 11px;
  height: 11px;
  right: 8px;
  top: 8px;
  cursor: pointer;
`
