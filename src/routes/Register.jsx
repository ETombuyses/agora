import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import { Button } from '../components/atoms/Button'
import { SectionSepartor } from '../components/atoms/Separator'
import { ReactComponent as GovIcon } from '../assets/icons/gouv.svg'
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'
import { RegisterForm } from '../components/organisms/RegisterForm'

// images
import welcomeImage from '../assets/images/welcome1.png'

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

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Register() {
  const hideButton = useRef(0)

  const handleForm = () => {
    hideButton.current.style.transform = 'translateX(calc(-100vw + 24px))'
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
        <RegisterFormWrapper />
      </ContentWrapper>
    </PageWrapper>
  )
}
