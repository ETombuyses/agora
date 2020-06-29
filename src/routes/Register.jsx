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

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Register() {
  const [popUpText, setPopUpText] = useState('')

  const hideButton = useRef(0)

  const transitionForm = createRef(0)
  const popup = createRef(0)
  const name = createRef(0)
  const firstName = createRef(0)
  const email = createRef(0)
  const pswd = createRef(0)
  const confirmePswd = createRef(0)
  const nbAgora = createRef(0)
  const nbResident = createRef(0)
  const isuYesButton = createRef(0)
  const isuNoButton = createRef(0)
  const gasYesButton = createRef(0)
  const gasNoButton = createRef(0)
  const livingSpace = createRef(0)
  const nbNavigo = createRef(0)
  const nbNIF = createRef(0)

  const handleForm = () => {
    hideButton.current.style.transform = 'translateX(calc(-100vw + 24px))'
  }

  const handleClick = () => {
    const expressionEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    //Check if name is valid
    if (
      name.current.value !== '' &&
      (name.current.value.length < 2 || name.current.value.length > 50)
    ) {
      setPopUpText('Le champs "Nom" doit contenir entre 2 et 50 caractères')
      popup.current.style.visibility = 'visible'
    } else if (name.current.value === '') {
      setPopUpText('Le champs "Nom" n\'est pas remplie')
      popup.current.style.visibility = 'visible'

      //Check if firstname is valid
    } else if (
      firstName.current.value !== '' &&
      (firstName.current.value.length < 2 ||
        firstName.current.value.length > 50)
    ) {
      setPopUpText('Le champs "Prénom" doit contenir entre 2 et 50 caractères')
      popup.current.style.visibility = 'visible'
    } else if (firstName.current.value === '') {
      setPopUpText('Le champs "Prènom" n\'est pas remplie')
      popup.current.style.visibility = 'visible'

      //Check if email is valid
    } else if (
      email.current.value !== '' &&
      (email.current.value.length < 4 || pswd.current.value.length > 255)
    ) {
      setPopUpText('Le champs "Email" doit contenir entre 4 et 255 caractères')
      popup.current.style.visibility = 'visible'
    } else if (
      email.current.value !== '' &&
      expressionEmail.test(String(email.current.value).toLowerCase()) === false
    ) {
      setPopUpText('Le champs "Email" ne correspond pas à un email')
      popup.current.style.visibility = 'visible'
    } else if (email.current.value === '') {
      setPopUpText('Le champs "Email" n\'est pas remplie')
      popup.current.style.visibility = 'visible'

      //Check if password is valid
    } else if (
      pswd.current.value !== '' &&
      (pswd.current.value.length < 8 || pswd.current.value.length > 255)
    ) {
      setPopUpText(
        'Le champs "Mot de passe" doit contenir entre 8 et 255 caractères'
      )
      popup.current.style.visibility = 'visible'
    } else if (pswd.current.value !== confirmePswd.current.value) {
      setPopUpText('Les mots de passe saisis ne sont pas identiques')
      popup.current.style.visibility = 'visible'
    } else if (pswd.current.value === '') {
      setPopUpText('Le champs "Mot de passe" n\'est pas remplie')
      popup.current.style.visibility = 'visible'
    } else {
      transitionForm.current.style.transform = 'translateX(calc(-50% + 24px))'
    }
  }

  const sendForm = (e) => {
    e.preventDefault()

    const expressionAgora = /^\d{8}$/
    const numberOnly = /^[0-9]+$/
    const expressionNIF = /^[0-3]\d{12}$/

    //Check if nb Agora is valid
    if (
      nbAgora.current.value !== '' &&
      (expressionAgora.test(String(nbAgora.current.value).toLowerCase()) ===
        false ||
        nbAgora.current.value.length !== 8)
    ) {
      setPopUpText(
        "Le numéro d'Agora n'est pas valide. Il doit contenir 8 numéros."
      )
      popup.current.style.visibility = 'visible'
    } else if (nbAgora.current.value === '') {
      setPopUpText("Le numéro d'Agora n'est pas remplie")
      popup.current.style.visibility = 'visible'

      //Check if nb resident is valid
    } else if (nbResident.current.value === '') {
      setPopUpText('Le champ "Nombre de résidents" n\'est pas remplie')
      popup.current.style.visibility = 'visible'
    } else if (
      numberOnly.test(String(nbResident.current.value).toLowerCase()) === false
    ) {
      setPopUpText(
        'Le champ "Nombre de résidents" doit contenir uniquement des chiffres.'
      )
      popup.current.style.visibility = 'visible'
    } else if (livingSpace.current.value === '') {
      setPopUpText('Le champ "Surface de l’habitat" n\'est pas remplie')
      popup.current.style.visibility = 'visible'
    } else if (
      livingSpace.current.value !== '' &&
      numberOnly.test(String(livingSpace.current.value).toLowerCase()) === false
    ) {
      setPopUpText(
        'Le champ "Surface de l’habitat" doit contenir uniquement des chiffres.'
      )
      popup.current.style.visibility = 'visible'
    } else if (
      nbNavigo.current.value !== '' &&
      (numberOnly.test(String(nbNavigo.current.value).toLowerCase()) ===
        false ||
        nbNavigo.current.value.length !== 8)
    ) {
      setPopUpText(
        'Le champ "Numéro carte Navigo" doit contenir uniquement des chiffres et doit être composé de 8 numéros'
      )
      popup.current.style.visibility = 'visible'
    } else if (nbNIF.current.value === '') {
      setPopUpText('Le champ "Numéro NIF" n\'est pas remplie')
      popup.current.style.visibility = 'visible'
    } else if (
      expressionNIF.test(String(nbNIF.current.value).toLowerCase()) === false ||
      nbNIF.current.value.length !== 13
    ) {
      setPopUpText(
        'Le champ "Numéro NIF" doit contenir uniquement des chiffres et doit être composé de 13 numéros'
      )
      popup.current.style.visibility = 'visible'
    } else {
      let gas = true
      let isulation = true

      if (gasYesButton.current.checked !== true) {
        gas = false
      }

      if (isuYesButton.current.checked !== true) {
        isulation = false
      }

      const lastName = name.current.value
      const primaryName = firstName.current.value
      const emailling = email.current.value
      const password = pswd.current.value
      const agoraNumber = Number(nbAgora.current.value)
      const residentNumber = Number(nbResident.current.value)
      const livingArea = Number(livingSpace.current.value)
      const navigoNumber = Number(nbNavigo.current.value)
      const nifNumber = nbNIF.current.value

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

  //Close PopUp
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
        <RegisterFormWrapper
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
  margin-top: 16px;
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

const RegisterFormWrapper = styled(RegisterForm)``
