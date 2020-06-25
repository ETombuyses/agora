import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { login } from '../tools/isAuth'

// components
import { Button } from '../components/atoms/Button'
import { SectionSepartor } from '../components/atoms/Separator'
import { ReactComponent as GovIcon } from '../assets/icons/gouv.svg'
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'
import { InputText } from '../components/atoms/InputText'

// images
import welcomeImage from '../assets/images/welcome.png'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const PageWrapper = styled.div`
  background: ${(props) => props.theme.blueGrey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  padding-top: 56px;
  background: ${(props) => props.theme.white};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

const ContentWrapper = styled.div`
  padding: 24px;
  height: 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  text-align: center;
  margin: 0 0 30px 0;
`

const GovButton = styled(Button)`
  margin-bottom: 16px;
`

const LoginButton = styled(Button)`
  margin-top: 16px;
  align-self: start;
  cursor: pointer;
`

const InputTextButton = styled(InputText)`
  margin-top: 16px;
  width: 100%;
`

const FormContainer = styled.form`
  width: 100%;
`

const ToggleText = styled.p`
  margin-top: 42px;
  font-size: 13px;
`

const ToggleLink = styled.span`
  color: ${(props) => props.theme.green};
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Register() {
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
        <Title className="headline">S'inscrire sur Agora</Title>
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
          Pas encore membre? <ToggleLink>S’inscrire</ToggleLink>
        </ToggleText>
      </ContentWrapper>
    </PageWrapper>
  )
}
