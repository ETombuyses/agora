import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import { media } from '../../scss/config/mixins'

// components
import { InputText } from '../atoms/form/InputText'
import { Button } from '../atoms/form/Button'
import { RadioButtonsGroup } from '../molecules/form/RadioButtonsGroup'

import { checkValidateInput } from '../../tools/RegisterFormChecks'

/* -----------------------------------------------------COMPONENT------------------------------------------------ */

export const RegisterForm = forwardRef((props, ref) => {
  const [errorText, setErrorText] = useState({
    state: {
      lastName: '',
      firstName: '',
      email: '',
      pswd: '',
      confirmePswd: '',
      nbAgora: '',
      nbResident: '',
      livingSpace: '',
      nbNavigo: '',
      nbNIF: '',
    },
  })

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

  const onHandleChange = (nameRef, nameInput) => {
    let error = checkValidateInput(nameRef, nameInput)

    if (error) {
      //Take state, put info inside, and put final state in useState
      let { state } = { ...errorText }
      let currentState = state
      currentState[nameInput] = error
      setErrorText({ state: currentState })

      nameRef.current.style.outline = '#f25050 auto 1px'
      console.log(typeof errorText.state.lastName, errorText.state.lastName)
    } else {
      nameRef.current.style.outline = ''
    }
  }

  return (
    <>
      <FormWrapper ref={transitionForm} className={props.className}>
        <View>
          <InputTextButton
            ref={name}
            required={true}
            label="Nom"
            type={'text'}
            identifyer={'lastName'}
            errorText={errorText.state.lastName}
            onChangeValue={() => onHandleChange(name, 'lastName')}
          />
          <InputTextButton
            ref={firstName}
            required={true}
            label="Prénom"
            type={'text'}
            identifyer={'firstName'}
            errorText={errorText.state.firstName}
            onChangeValue={() => onHandleChange(firstName, 'firstName')}
          />
          <InputTextButton
            ref={email}
            type={'email'}
            required={true}
            label="Email"
            identifyer={'email'}
            errorText={errorText.state.email}
            onChangeValue={() => onHandleChange(email, 'email')}
          />
          <InputTextButton
            ref={pswd}
            required={true}
            label="Mot de passe"
            type={'password'}
            identifyer={'password'}
            errorText={errorText.state.pswd}
            onChangeValue={() => onHandleChange(pswd, 'pswd')}
          />
          <InputTextButton
            ref={confirmePswd}
            required={true}
            label="Confirmer votre mot de passe"
            type={'password'}
            identifyer={'passwordConfirmation'}
            errorText={errorText.state.confirmePswd}
            onChangeValue={() => onHandleChange(confirmePswd, 'confirmePswd')}
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
            hintText={
              'Veuillez inscrire le numéro Agora situé sous votre appareil Agora'
            }
            label="Numéro d’Agora"
            type={'text'}
            identifyer={'AgoraNumber'}
            errorText={errorText.state.nbAgora}
            onChangeValue={() => onHandleChange(nbAgora, 'nbAgora')}
          />
          <InputTextButton
            ref={nbResident}
            required={true}
            label="Nombre de résidents"
            type={'text'}
            identifyer={'ResidentNumber'}
            errorText={errorText.state.nbResident}
            onChangeValue={() => onHandleChange(nbResident, 'nbResident')}
          />
          <RadioButtonsGroup
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
          <RadioButtonsGroup
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
            identifyer={'livingSpace'}
            errorText={errorText.state.livingSpace}
            onChangeValue={() => onHandleChange(livingSpace, 'livingSpace')}
          />
          <InputTextButton
            ref={nbNavigo}
            required={false}
            label="Numéro carte Navigo"
            type={'text'}
            identifyer={'navigoNumber'}
            errorText={errorText.state.nbNavigo}
            onChangeValue={() => onHandleChange(nbNavigo, 'nbNavigo')}
          />
          <InputTextButton
            ref={nbNIF}
            required={true}
            label="Numéro NIF"
            hint={true}
            hintText={`Vous pouvez trouver votre numéro d'identité fiscale (NIF) sur vos avis d’impôt (impôt sur le revenu, taxe d’habitation, taxe foncière)`}
            type={'text'}
            identifyer={'NIFNumber'}
            errorText={errorText.state.nbNIF}
            onChangeValue={() => onHandleChange(nbNIF, 'nbNIF')}
          />
          <ContinueButton
            onClickButton={props.sendForm}
            isFullWidth={false}
            text="Créer le compte"
            isFormButton={true}
          />
        </View>
      </FormWrapper>
    </>
  )
})

/* -----------------------------------------------------STYLE------------------------------------------------ */

const FormWrapper = styled.form`
  display: flex;
  width: 200vw;
  align-self: start;
  transition: transform 0.7s ease;
  padding: 24px;
  margin-left: 0;

  ${media.desktop`
    width: auto;
    display: block;
    padding: 0;
  `}
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

  ${media.desktop`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
  `}
`
