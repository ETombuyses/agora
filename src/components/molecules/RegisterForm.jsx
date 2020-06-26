import React, { useRef, createRef, useState } from 'react'
import styled from 'styled-components'

// components
import { InputText } from '../atoms/InputText'
import { Button } from '../atoms/Button'
import { PopUp } from '../atoms/PopUp'

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

/* const InputRadioButton = styled(InputText)`
  width: 100%;

  input {
    opacity: 0;
    position: fixed;
    width: 0;
    cursor: pointer;
  }

  p {
    display: inline-block;
    background-color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
  }
` */

const ContinueButton = styled(Button)`
  margin-top: 16px;
  align-self: start;
  cursor: pointer;
`

const View = styled.div`
  padding-right: 24px;
  width: 50%;
`

/* const RadioButtons = styled.div`
  display: flex;
` */

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const RegisterForm = (props) => {
  const [popUpText, setPopUpText] = useState('')

  const transitionForm = useRef(0)

  //send ref to child PopUp
  const popup = createRef(0)
  const name = createRef(0)
  const firstName = createRef(0)
  const email = createRef(0)
  const pswd = createRef(0)
  const confirmePswd = createRef(0)

  //Check if data are valide before continue on the second step of form
  const handleClick = () => {
    const expression = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
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
      expression.test(String(email.current.value).toLowerCase()) === false
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

  //Close PopUp
  const onClose = () => {
    popup.current.style.visibility = 'hidden'
  }

  return (
    <FormWrapper ref={transitionForm} className={props.className}>
      <View>
        <InputTextButton ref={name} required={true} label="Nom" type={'text'} />
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
          onClickButton={handleClick}
        />
      </View>
      <View className="secondView">
        <InputTextButton
          required={true}
          hint={true}
          label="Numéro d’Agora"
          type={'text'}
        />
        <InputTextButton
          required={true}
          label="Nombre de résidents"
          type={'text'}
        />
        {/*         <RadioButtons>
          <InputRadioButton
            name={'isulation'}
            label="Oui"
            type={'radio'}
            checked={true}
          />
          <InputRadioButton name={'isulation'} label="Non" type={'radio'} />
        </RadioButtons> */}
        <InputTextButton
          required={true}
          label="Surface de l’habitat (en M²)"
          type={'text'}
        />
        <InputTextButton
          required={true}
          label="Numéro de sécurité sociale"
          type={'text'}
        />
        <ContinueButton
          isFullWidth={false}
          text="Créer le compte"
          isFormButton={true}
        />
      </View>
      <PopUp
        onClose={onClose}
        ref={popup}
        size={'tiny'}
        text={popUpText}
        registerPopUp={true}
      />
    </FormWrapper>
  )
}
