import React, { useRef, createRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import { Button } from '../components/atoms/Button'
import { SectionSepartor } from '../components/atoms/Separator'
import { ReactComponent as GovIcon } from '../assets/icons/gouv.svg'
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'
import { RegisterForm } from '../components/organisms/RegisterForm'
import { PopUp } from '../components/atoms/PopUp'
import { register } from '../tools/isAuth'

// images
import welcomeImage from '../assets/images/welcome1.png'

// form's check functions
import { checkGenralFormInfo } from '../tools/RegisterFormChecks'
import { checkAgoraForm } from '../tools/RegisterFormChecks'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Register() {
  const [popUpText, setPopUpText] = useState('')

  const hideButton = useRef(0)

  const transitionForm = createRef(0),
    popup = createRef(0),
    name = createRef(0),
    firstName = createRef(0),
    email = createRef(0),
    pswd = createRef(0),
    confirmePswd = createRef(0),
    nbAgora = createRef(0),
    nbResident = createRef(0),
    isuYesButton = createRef(0),
    isuNoButton = createRef(0),
    gasYesButton = createRef(0),
    gasNoButton = createRef(0),
    livingSpace = createRef(0),
    nbNavigo = createRef(0),
    nbNIF = createRef(0)

  const handleForm = () => {
    hideButton.current.style.transform = 'translateX(calc(-100vw + 24px))'
  }

  const handleClick = () => {
    popup.current.style.visibility = 'hidden'

    let error = checkGenralFormInfo(
      name.current.value,
      firstName.current.value,
      email.current.value,
      pswd.current.value,
      confirmePswd.current.value
    )

    if (error) {
      setPopUpText(error)
      popup.current.style.visibility = 'visible'
    } else {
      transitionForm.current.style.transform = 'translateX(calc(-50% + 24px))'
    }
  }

  const sendForm = (e) => {
    e.preventDefault()

    const lastName = name.current.value
    const primaryName = firstName.current.value
    const emailling = email.current.value
    const password = pswd.current.value

    const agoraNumber = Number(nbAgora)
    const residentNumber = Number(nbResident)
    const livingArea = Number(livingSpace)
    const navigoNumber = Number(nbNavigo)
    const nifNumber = nbNIF

    let error = checkAgoraForm(
      nbAgora.current.value,
      nbResident.current.value,
      livingSpace.current.value,
      nbNavigo.current.value,
      nbNIF.current.value
    )

    if (error) {
      setPopUpText(error)
      popup.current.style.visibility = 'visible'
    } else {
      let gas = gasYesButton.current.checked
      let isulation = isuYesButton.current.checked

      register(
        lastName,
        primaryName,
        password,
        emailling,
        agoraNumber,
        residentNumber,
        livingArea,
        gas,
        isulation,
        nifNumber,
        navigoNumber
      )
    }
  }

  // Close PopUp
  const onClose = () => {
    popup.current.style.visibility = 'hidden'
  }

  return (
    <PageWrapper>
      <Image src={welcomeImage} />
      <ContentWrapper ref={hideButton}>
        <RegisterButtons>
          <Title className="headline">S'inscrire sur Agora</Title>
          <GovButton
            isFullWidth={true}
            icon={GovIcon}
            isGovButton={true}
            text="S'identifier avec FranceConnect"
          />
          <SectionSepartorWrapper />
          <RegisterButton
            isFullWidth={true}
            icon={MailIcon}
            text="S'inscrire"
            onClickButton={handleForm}
          />
          <ToggleText>
            Déjà membre ? <ToggleLink to="/login"> Se connecter</ToggleLink>
          </ToggleText>
        </RegisterButtons>
        <RegisterForm
          ref={{
            transitionForm: transitionForm,
            firstName: firstName,
            name: name,
            pswd: pswd,
            email: email,
            confirmePswd: confirmePswd,
            nbAgora: nbAgora,
            nbResident: nbResident,
            isuYesButton: isuYesButton,
            isuNoButton: isuNoButton,
            gasYesButton: gasYesButton,
            gasNoButton: gasNoButton,
            livingSpace: livingSpace,
            nbNavigo: nbNavigo,
            nbNIF: nbNIF,
          }}
          onClickButton={handleClick}
          sendForm={sendForm}
        />
      </ContentWrapper>
      <PopUp
        onClose={(e) => onClose(e)}
        ref={popup}
        size={'tiny'}
        text={popUpText}
        registerPopUp={true}
      />
    </PageWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageWrapper = styled.div`
  background: ${(props) => props.theme.blueGrey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`
const Image = styled.img`
  background: ${(props) => props.theme.white};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  width: 100%;
  object-position: bottom;
  object-fit: cover;
  max-height: 35vh;
`

const ContentWrapper = styled.div`
  padding: 24px;
  height: 0;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300vw;
  transition: transform 0.7s ease;
`

const Title = styled.h2`
  text-align: center;
  margin: 0 0 30px 0;
`

const GovButton = styled(Button)`
  margin-bottom: 16px;
`

const RegisterButton = styled(Button)`
  margin-top: 16px;x
`

const ToggleText = styled.p`
  margin-top: 42px;
  font-size: 13px;
`

const ToggleLink = styled(Link)`
  color: ${(props) => props.theme.green};
`

const SectionSepartorWrapper = styled(SectionSepartor)`
  align-self: center;
  display: inline-block;
`

const RegisterButtons = styled.div`
  width: calc(100vw - 48px);
  text-align: center;
`
