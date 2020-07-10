import React, { useRef, createRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// form's check functions
import { checkGeneralFormInfo } from '../tools/RegisterFormChecks'
import { checkAgoraForm } from '../tools/RegisterFormChecks'

// components
import { Button } from '../components/atoms/form/Button'
import { SectionSepartor } from '../components/atoms/layout/SectionSeparator'
import { RegisterForm } from '../components/organisms/RegisterForm'
import { register } from '../tools/isAuth'
import { media } from '../scss/config/mixins'
import { Loader } from '../components/atoms/form/Loader'

// images and icons
import logoAgorax1 from '../assets/icons/login/logo_login/logo_loginx1.png'
import logoAgorax1_5 from '../assets/icons/login/logo_login/logo_loginx1_5.png'
import logoAgorax2 from '../assets/icons/login/logo_login/logo_loginx2.png'
import welcomeImage from '../assets/images/person-holding-plant.svg'
import { ReactComponent as GovIcon } from '../assets/icons/login/gouv.svg'
import { ReactComponent as MailIcon } from '../assets/icons/login/mail.svg'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export default function Register() {
  const [errorTextFirstPart, setErrorTextFirstPart] = useState({
    state: {
      lastName: '',
      firstName: '',
      email: '',
      pswd: '',
      confirmPswd: '',
    },
  })

  const [errorTextSecondPart, setErrorTextSecondPart] = useState({
    state: {
      nbAgora: '',
      nbResident: '',
      livingSpace: '',
      nbNavigo: '',
      nbNIF: '',
    },
  })

  const [errorRegister, setErrorRegister] = useState()
  const [loaderText, setLoaderText] = useState(
    'Veuillez patienter pendant la création du compte'
  )
  const [loaderDisplay, setLoaderDisplay] = useState(true)

  const hideButton = useRef(0)
  const registerPage = useRef(0)
  const loader = useRef(0)
  const img = useRef(0)

  const refs = {
    transitionForm: createRef(0),
    popup: createRef(0),
    firstName: createRef(0),
    name: createRef(0),
    pswd: createRef(0),
    email: createRef(0),
    confirmPswd: createRef(0),
    nbAgora: createRef(0),
    nbResident: createRef(0),
    isuYesButton: createRef(0),
    isuNoButton: createRef(0),
    gasYesButton: createRef(0),
    gasNoButton: createRef(0),
    livingSpace: createRef(0),
    nbNavigo: createRef(0),
    nbNIF: createRef(0),
    secondViewForm: createRef(0),
  }

  const handleForm = () => {
    if (window.innerWidth >= 992) {
      hideButton.current.style.transform = 'translateY(calc(-100vh))'
    } else {
      refs.transitionForm.current.style.maxHeight = 'inherit'
      refs.transitionForm.current.style.overflow = 'inherit'
      hideButton.current.style.transform = 'translateX(calc(-100vw + 24px))'
    }
  }

  const handleClick = () => {
    let error = checkGeneralFormInfo(
      refs.name.current.value,
      refs.firstName.current.value,
      refs.email.current.value,
      refs.pswd.current.value,
      refs.confirmPswd.current.value
    )

    if (error) {
      setErrorTextFirstPart(error)
    } else {
      if (window.innerWidth >= 992) {
        refs.transitionForm.current.style.transform = 'translateY(calc(-100vh))'
        refs.secondViewForm.current.style.display = 'flex'
        refs.secondViewForm.current.style.height = 'auto'
        refs.secondViewForm.current.style.padding = '70px 0'
        registerPage.current.style.overflow = 'auto'
        img.current.style.position = 'sticky'
        img.current.style.top = '0'
      } else {
        refs.transitionForm.current.style.transform =
          'translateX(calc(-50% + 24px))'
        refs.secondViewForm.current.style.maxHeight = 'inherit'
        refs.secondViewForm.current.style.overflow = 'inherit'
      }
    }
  }

  const sendForm = async (e) => {
    e.preventDefault()
    setErrorRegister('')

    const lastName = refs.name.current.value
    const primaryName = refs.firstName.current.value
    const emailling = refs.email.current.value
    const password = refs.pswd.current.value

    const agoraNumber = refs.nbAgora.current.value
    const residentNumber = Number(refs.nbResident.current.value)
    const livingArea = Number(refs.livingSpace.current.value)
    const navigoNumber = refs.nbNavigo.current.value
    const nifNumber = refs.nbNIF.current.value

    let error = checkAgoraForm(
      refs.nbAgora.current.value,
      refs.nbResident.current.value,
      refs.livingSpace.current.value,
      refs.nbNavigo.current.value,
      refs.nbNIF.current.value
    )

    if (error) {
      setErrorTextSecondPart(error)
    } else {
      loader.current.style.display = 'block'

      let gas = refs.gasYesButton.current.checked
      let isulation = refs.isuYesButton.current.checked

      let registerSuccess = await register(
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

      if (registerSuccess.success) {
        setLoaderText(
          'Inscription réussie. Vous allez être redirigés vers la page de connexion pour vous connecter.'
        )
        setLoaderDisplay(false)
        setTimeout(function () {
          window.location.hash = '/login'
        }, 3000)
      } else {
        loader.current.style.display = 'none'
        setErrorRegister(registerSuccess.message)
      }
    }
  }

  return (
    <PageWrapper ref={registerPage}>
      <ImageLogo
        src={logoAgorax1}
        srcSet={`${logoAgorax1_5} 1666w, ${logoAgorax2} 2221w`}
        sizes="(max-width: 992px) 30px, 75px"
        alt="logo agora"
      />
      <Image
        ref={img}
        src={welcomeImage}
        alt="dessin d'une personne qui porte une plante en pot"
      />
      <ContentWrapper ref={hideButton}>
        <RegisterButtons>
          <Title className="heading biggest">S'inscrire sur Agora</Title>
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
          <ToggleText className="mobile">
            Déjà membre ? <ToggleLink to="/login"> Se connecter</ToggleLink>
          </ToggleText>
        </RegisterButtons>
        <RegisterFormWrapper
          ref={refs}
          onClickButton={handleClick}
          sendForm={sendForm}
          errorTextFirstPart={errorTextFirstPart}
          errorTextSecondPart={errorTextSecondPart}
          errorRegister={errorRegister}
        />
      </ContentWrapper>
      <ToggleText className="desktop">
        Déjà membre ? <ToggleLink to="/login"> Se connecter</ToggleLink>
      </ToggleText>
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
  overflow-x: hidden;

  ${media.desktop`
    flex-direction: row;
    overflow: hidden;
    height: 100vh;
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
    max-height: 100vh;
    width: 40%;
    padding-top: 0px;
  `}
`

const ContentWrapper = styled.div`
  padding: 24px;
  height: 65vh;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 300vw;
  transition: transform 0.7s ease;

  ${media.desktop`
    height: auto;
    padding: 0 15%;
    justify-content: left;
    width: 100%;
    display: block;
    flex: inherit;
  `}
`

const Title = styled.h1`
  text-align: left;
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
  font-weight: 500;

  &.desktop {
    display: none;
  }

  ${media.desktop`
    position: absolute;
    top: 0;
    right: 32px;

    &.mobile {
      display: none;
    }

    &.desktop {
      display: block;
    }
  `}
`

const ToggleLink = styled(Link)`
  color: ${(props) => props.theme.green};
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
`

const SectionSepartorWrapper = styled(SectionSepartor)`
  align-self: center;
  display: inline-block;
`

const RegisterFormWrapper = styled(RegisterForm)`
  max-height: 60vh;
  overflow: hidden;

  ${media.desktop`
    max-height: inherit;
    overflow: inherit;
  `}
`

const RegisterButtons = styled.div`
  width: calc(100vw - 48px);
  text-align: center;

  ${media.desktop`
    width: auto;
    margin: inherit;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  `}
`

const ImageLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  ${media.desktop`
    position: fixed;
    top: 70px;
    left: 20%;
    transform: translateX(-50%);
    z-index: 1;
  `}
`
