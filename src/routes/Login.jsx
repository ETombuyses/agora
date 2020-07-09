import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from '../scss/config/mixins'

// tool
import { login } from '../tools/isAuth'

// components
import { Button } from '../components/atoms/form/Button'
import { SectionSepartor } from '../components/atoms/layout/SectionSeparator'
import { InputText } from '../components/atoms/form/InputText'
import { Modal } from '../components/molecules/layout/Modal'
import { Loader } from '../components/atoms/form/Loader'

// images and icons
import logoAgora from '../assets/icons/layout/logo_login.png'
import welcomeImage from '../assets/images/person-holding-plant.svg'
import { ReactComponent as GovIcon } from '../assets/icons/login/gouv.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Login() {
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [errorLogin, setErrorLogin] = useState()

  const [loaderText, setLoaderText] = useState('Connexion en cours...')
  const [loaderDisplay, setLoaderDisplay] = useState(true)
  const loader = useRef(0)

  const modal = useRef(null)
  let modaleShown = localStorage.getItem('modalShown')

  const onClickModal = () => {
    modal.current.style.display = 'none'
    localStorage.setItem('modalShown', true)
  }

  const emailStorage = (e) => {
    setEmail(e.target.value)
  }

  const passwordStorage = (e) => {
    setPassword(e.target.value)
  }

  const sendData = async (e) => {
    e.preventDefault()
    setErrorLogin('')
    loader.current.style.display = 'block'

    // Login function from isAuth.js (Get tokens if user is recognized)
    let successLogin = await login(email, password)
    loader.current.style.display = 'none'

    if (successLogin.success) {
      window.location.hash = '/'
    } else {
      setErrorLogin(successLogin.message)
    }
  }

  return (
    <PageWrapper>
      <ImageLogo src={logoAgora} alt="logo agora" />
      <Image src={welcomeImage} alt="dessin d'un jeune garçon" />
      <ContentWrapper>
        <Title className="heading biggest">Se connecter sur Agora</Title>
        <GovButton
          isFullWidth={true}
          icon={GovIcon}
          isGovButton={true}
          text="S'identifier avec FranceConnect"
        />
        <SectionSepartor />
        <FormContainer onSubmit={(e) => sendData(e)}>
          <InputTextButton
            onChangeValue={(e) => emailStorage(e)}
            required={true}
            label="Email"
            type={'text'}
            identifyer={'email'}
          />
          <InputTextButton
            onChangeValue={(e) => passwordStorage(e)}
            required={true}
            label="Mot de passe"
            type={'password'}
            identifyer={'password'}
          />
          {errorLogin && <LoginError>{errorLogin}</LoginError>}
          <LoginButton
            isFullWidth={false}
            text="Se connecter"
            isFormButton={true}
          />
        </FormContainer>
        <ToggleText>
          Pas encore membre?
          <ToggleLink to="/register"> S’inscrire</ToggleLink>
        </ToggleText>
      </ContentWrapper>
      {!modaleShown && (
        <ModalDisclaimer
          onClose={onClickModal}
          ref={modal}
          text={
            "<p class='disclaimerTitle'>Disclaimer</p><br>Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié"
          }
        />
      )}
      <Loader ref={loader} text={loaderText} displayed={loaderDisplay} />
    </PageWrapper>
  )
}

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageWrapper = styled.div`
  background: ${(props) => props.theme.greyBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    flex-direction: row;
  `}
`
const Image = styled.img`
  background: ${(props) => props.theme.white};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  object-position: bottom;
  object-fit: contain;
  max-height: 45vh;
  padding-top: 70px;

  ${media.desktop`
    max-height: inherit;
    width: 40%;
    padding-top: 0px;
  `}
`

const ContentWrapper = styled.div`
  padding: 24px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    height: auto;
    max-width: 60%;
    padding: 24px 15%;
  `}
`

const Title = styled.h1`
  align-self: start;
  margin: 0 0 30px 0;
`

const GovButton = styled(Button)`
  margin-bottom: 16px;

  ${media.desktop`
    width: 100%;
    align-self: start;
  `}
`

const LoginButton = styled(Button)`
  margin-top: 16px;
  align-self: start;
  cursor: pointer;

  ${media.desktop`
    display: inherit
  `}
`

const InputTextButton = styled(InputText)`
  margin-top: 16px;
  width: 100%;
`

const FormContainer = styled.form`
  width: 100%;

  ${media.desktop`
    align-self: start;
  `}
`

const ToggleText = styled.p`
  margin-top: 42px;

  ${media.desktop`
    position: absolute;
    top: 0px;
    right: 32px;
  `}
`

const ImageLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;

  ${media.desktop`
    top: 70px;
    left: 20%;
    transform: translateX(-50%);
    width: 75px;
  `}
`

const ToggleLink = styled(Link)`
  color: ${(props) => props.theme.green};
  background: ${(props) => props.theme.white};
  cursor: pointer;
  font-weight: bold;
  padding: 8px;
  margin-left: 5px;
  border-radius: 10px;
`
const ModalDisclaimer = styled(Modal)`
  visibility: visible;
  position: fixed;
`
const LoginError = styled.p`
  color: ${(props) => props.theme.red};
  margin-top: 16px;
`
