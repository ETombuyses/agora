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

// images and icons
import welcomeImage from '../assets/images/person-holding-plant.svg'
import { ReactComponent as GovIcon } from '../assets/icons/login/gouv.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Login() {
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)

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

  const sendData = (e) => {
    e.preventDefault()

    //Login function from isAuth.js (Get tokens if user is recognized)
    login(email, password)
  }

  return (
    <PageWrapper>
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
  max-height: 35vh;

  ${media.desktop`
    max-height: inherit;
    width: 40%;
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
