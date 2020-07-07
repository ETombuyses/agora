import React, { useEffect } from 'react'
import styled from 'styled-components'
import { media } from '../../../scss/config/mixins'

// component
import { Button } from '../../atoms/form/Button'

// icon
import { AdviceIcon } from '../../atoms/layout/AdviceIcon'

// articles
import { advices } from '../../../tools/advicesTexts'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const AdviceModal = (props) => {
  useEffect(() => {
    if (props.isShown) {
      let body = document.querySelector('body')
      body.classList.add('noScroll')
    } else {
      let body = document.querySelector('body')
      body.classList.remove('noScroll')
    }
  })

  function createMarkup(content) {
    return { __html: content }
  }

  function test() {
    props.hideModal()
  }

  return (
    <PopUpWrapper
      className={props.className}
      onClick={props.onClose}
      isShown={props.isShown}
    >
      <PopUpContainer size={props.size} registerPopUp={props.registerPopUp}>
        <LampBulbIcon />
        <ContentWrapper>
          <PopUpContent
            dangerouslySetInnerHTML={createMarkup(advices[props.article])}
          />
        </ContentWrapper>
        <CustomButton text="J'ai compris" onClickButton={test} />
      </PopUpContainer>
    </PopUpWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PopUpWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  bottom: 0;
  left: 0;
  z-index: 110;
  background-color: ${(props) => props.theme.backgroundPopUp};
  visibility: ${(props) => (props.isShown ? 'visible' : 'hidden')};
`

const PopUpContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background-color: ${(props) => props.theme.white};
  width: 90%;
  height: 90%;
  max-height: 90%;
  top: 50%;
  left: ${(props) => (props.registerPopUp ? 'calc(50% - 24px);' : '50%')};
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 0 10px rgba(223, 223, 223, 0.25);
  padding-bottom: 80px;

  ${media.tablet`
    max-width: 600px;
    max-height: 700px;
  `}

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.grassGreen};
    width: 120%;
    height: 66px;
    max-height: 90%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;

    ${media.desktop`
      height: 100px;
    `}
  }
`

const LampBulbIcon = styled(AdviceIcon)`
  position: absolute;
  left: 50%;
  top: calc(66px - 48px / 2);
  transform: translate(-50%);

  ${media.tablet`
    top: calc(66px - 64px / 2);
  `}

  ${media.desktop`
    top: calc(100px - 64px / 2);
  `}
`

const ContentWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  padding: 0 10px;
  margin: 0 10px;
  margin-top: calc(66px + 48px / 2 + 15px);
  max-height: calc(100% - 66px - (48px / 2) - 15px);

  ${media.tablet`
    padding: 0 20px;
    margin: 0 20px;
    margin-top: calc(66px + 64px / 2 + 15px);
    max-height: calc(100% - 66px - (64px / 2) - 15px);
  `}

  ${media.desktop`
    margin-top: calc(100px + 64px / 2 + 15px);
    max-height: calc(100% - 100px - (64px / 2) - 15px);
  `}
`

const PopUpContent = styled.article`
  font-weight: normal;
  /* font-size: ${(props) => (props.size === 'tiny' ? '10px' : '14px')}; */
  color: ${(props) => props.theme.black};
  text-align: left;

  .title {
    /* font-size: 21px; */
    margin-bottom: 24px;
    line-height: 130.5%;
  }

  .sectionTitle {
    /* font-size: 18px; */
    line-height: 130.5%;
    margin-bottom: 16px;
    margin-top: 25px;
  }

  p {
    /* font-size: 16px; */
    margin-bottom: 17px;
    line-height: 150%;
  }

  ul {
    font-weight: 300;
    list-style: circle;
    margin-left: 20px;
  }

  li:not(:last-child) {
    margin-bottom: 15px;
  }
`

const CustomButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  border-radius: 400px;
  transform: translateX(-50%);
`
