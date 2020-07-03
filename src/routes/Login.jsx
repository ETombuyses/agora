import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { media } from '../scss/config/mixins'

// tool
import { login } from '../tools/isAuth'

// components
import { Button } from '../components/atoms/form/Button'
import { SectionSepartor } from '../components/atoms/layout/SectionSeparator'
import { InputText } from '../components/atoms/form/InputText'

// images and icons
import welcomeImage from '../assets/images/person-holding-plant.svg'
import { ReactComponent as GovIcon } from '../assets/icons/login/gouv.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Login() {
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)

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
      <Image src={welcomeImage} />
      <ContentWrapper>
        <Title className="headline smallest">Se connecter avec Agora</Title>
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
          />
          <InputTextButton
            onChangeValue={(e) => passwordStorage(e)}
            required={true}
            label="Mot de passe"
            type={'text'}
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
    padding: 24px 15%;
  `}
`

const Title = styled.h2`
  align-self: start;
  margin: 0 0 30px 0;
  font-size: 19px;

  ${media.desktop`
    font-size: 33px;
  `}
`

const GovButton = styled(Button)`
  margin-bottom: 16px;

  ${media.desktop`
    width: 82%;
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
  font-size: 13px;

  ${media.desktop`
    position: absolute;
    top: 0px;
    right: 32px;
  `}
`

const ToggleLink = styled(Link)`
  color: ${(props) => props.theme.green};
  cursor: pointer;
`
