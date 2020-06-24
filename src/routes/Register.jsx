import React from 'react'
import styled from 'styled-components'

import { Button } from '../components/atoms/Button'
import { SectionSepartor } from '../components/atoms/Separator'
import { ReactComponent as GovIcon } from '../assets/icons/gouv.svg'
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'
import welcomeImage from '../assets/images/welcome.png'

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

const RegisterButton = styled(Button)`
  margin-top: 16px;
`

const ToggleText = styled.p`
  margin-top: 42px;
  font-size: 13px;
`

const ToggleLink = styled.span`
color: ${props => props.theme.green};
`

export default function Register() {
  return (
    <div>
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
          <RegisterButton
            isFullWidth={true}
            icon={MailIcon}
            text="S'inscrire"
          />
          <ToggleText>Déjà membre ? <ToggleLink>Se connecter</ToggleLink> </ToggleText>
        </ContentWrapper>
      </PageWrapper>
    </div>
  )
}
