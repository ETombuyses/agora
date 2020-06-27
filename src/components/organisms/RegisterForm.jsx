import React, { useRef, createRef, useState, forwardRef } from 'react'
import styled from 'styled-components'

// components
import { InputText } from '../atoms/InputText'
import { Button } from '../atoms/Button'
//import { PopUp } from '../atoms/PopUp'
import { RadioButtonGroup } from '../molecules/RadioButtonGroup'

/* -----------------------------------------------------STYLE------------------------------------------------ */

const FormWrapper = styled.form`
  display: flex;
  width: 200vw;
  align-self: start;
  transition: transform 0.7s ease;
  padding: 24px;
  margin-left: 0;
`

const InputTextButton = styled(InputText)`
  margin-top: 16px;
  width: 100%;
`

const ContinueButton = styled(Button)`
  margin-top: 16px;
  align-self: start;
  cursor: pointer;
`

const View = styled.div`
  padding-right: 24px;
  width: 50%;
`

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const RegisterForm = forwardRef((props, ref) => {
  const {
    transitionForm,
    name,
    firstName,
    email,
    pswd,
    confirmePswd,
    nbAgora,
    nbResident,
    isuYesButton,
    isuNoButton,
    gasYesButton,
    gasNoButton,
    livingSpace,
    nbNavigo,
    nbNIF,
  } = ref

  //const [popUpText, setPopUpText] = useState('')

  //const transitionForm = useRef(0)

  //send ref to child PopUp
  /*   const popup = createRef(0)
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
  const nbNIF = createRef(0) */

  //Check if data are valide before continue on the second step of form
  /*   const handleClick = () => {
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
  } */

  /*  //Close PopUp
  const onClose = () => {
    popup.current.style.visibility = 'hidden'
  } */

  //Send form
  /*   const sendForm = (e) => {
    e.preventDefault()

    const expressionAgora = /\d{8}/
    const numberOnly = /^[0-9]+$/
    const expressionNIF = /[0-3]\d{12}/

    //Check if nb Agora is valid
    if (
      nbAgora.current.value !== '' &&
      expressionAgora.test(String(nbAgora.current.value).toLowerCase()) ===
        false
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
      numberOnly.test(String(nbNavigo.current.value).toLowerCase()) === false
    ) {
      setPopUpText(
        'Le champ "Numéro carte Navigo" doit contenir uniquement des chiffres et doit être composé de 8 numéros'
      )
      popup.current.style.visibility = 'visible'
    } else if (nbNIF.current.value === '') {
      setPopUpText('Le champ "Numéro NIF" n\'est pas remplie')
      popup.current.style.visibility = 'visible'
    } else if (
      expressionNIF.test(String(nbNIF.current.value).toLowerCase()) === false
    ) {
      setPopUpText(
        'Le champ "Numéro NIF" doit contenir uniquement des chiffres et doit être composé de 13 numéros'
      )
      popup.current.style.visibility = 'visible'
    } else {
      console.log('Tout est OK')
    }
  } */

  return (
    <>
      <FormWrapper ref={transitionForm} className={props.className}>
        <View>
          <InputTextButton
            ref={name}
            required={true}
            label="Nom"
            type={'text'}
          />
          <InputTextButton
            ref={firstName}
            required={true}
            label="Prénom"
            type={'text'}
          />
          <InputTextButton
            ref={email}
            type={'email'}
            required={true}
            label="Email"
          />
          <InputTextButton
            ref={pswd}
            required={true}
            label="Mot de passe"
            type={'password'}
          />
          <InputTextButton
            ref={confirmePswd}
            required={true}
            label="Confirmer votre mot de passe"
            type={'password'}
          />
          <ContinueButton
            isFullWidth={false}
            text="Continuer"
            onClickButton={props.onClickButton}
          />
        </View>
        <View>
          <InputTextButton
            ref={nbAgora}
            required={true}
            hint={true}
            label="Numéro d’Agora"
            type={'text'}
          />
          <InputTextButton
            ref={nbResident}
            required={true}
            label="Nombre de résidents"
            type={'text'}
          />
          <RadioButtonGroup
            ref={{
              ref1: isuYesButton,
              ref2: isuNoButton,
            }}
            text1={'Oui'}
            name1={'isulation'}
            value1={'yesButton'}
            defaultChecked1={true}
            text2={'Non'}
            name2={'isulation'}
            value2={'noButton'}
            label={'Isolation changées ces  20 dernières années ?'}
            required={true}
          />
          <RadioButtonGroup
            ref={{
              ref1: gasYesButton,
              ref2: gasNoButton,
            }}
            text1={'Oui'}
            name1={'gas'}
            value1={'yesButtonGas'}
            defaultChecked1={true}
            text2={'Non'}
            name2={'gas'}
            value2={'noButtonGas'}
            label={'Avez vous  le gaz chez vous ?'}
            required={true}
          />
          <InputTextButton
            ref={livingSpace}
            required={true}
            label="Surface de l’habitat (en M²)"
            type={'text'}
          />
          <InputTextButton
            ref={nbNavigo}
            required={false}
            label="Numéro carte Navigo"
            type={'text'}
          />
          <InputTextButton
            ref={nbNIF}
            required={true}
            label="Numéro NIF"
            type={'text'}
          />
          <ContinueButton
            onClickButton={props.sendForm}
            isFullWidth={false}
            text="Créer le compte"
            isFormButton={true}
          />
        </View>
      </FormWrapper>
      {/*       <PopUp
        onClose={(e) => onClose(e)}
        ref={popup}
        size={'tiny'}
        text={popUpText}
        registerPopUp={true}
      /> */}
    </>
  )
})
