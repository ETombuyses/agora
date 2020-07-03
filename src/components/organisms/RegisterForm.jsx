import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { media } from '../../scss/config/mixins'

// components
import { InputText } from '../atoms/form/InputText'
import { Button } from '../atoms/form/Button'
import { RadioButtonsGroup } from '../molecules/form/RadioButtonsGroup'

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
          />
          <InputTextButton
            ref={firstName}
            required={true}
            label="Prénom"
            type={'text'}
            identifyer={'firstName'}
          />
          <InputTextButton
            ref={email}
            type={'email'}
            required={true}
            label="Email"
            identifyer={'email'}
          />
          <InputTextButton
            ref={pswd}
            required={true}
            label="Mot de passe"
            type={'password'}
            identifyer={'password'}
          />
          <InputTextButton
            ref={confirmePswd}
            required={true}
            label="Confirmer votre mot de passe"
            type={'password'}
            identifyer={'passwordConfirmation'}
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
            identifyer={'AgoraNumber'}
          />
          <InputTextButton
            ref={nbResident}
            required={true}
            label="Nombre de résidents"
            type={'text'}
            identifyer={'ResidentNumber'}
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
          />
          <InputTextButton
            ref={nbNavigo}
            required={false}
            label="Numéro carte Navigo"
            type={'text'}
            identifyer={'navigoNumber'}
          />
          <InputTextButton
            ref={nbNIF}
            required={true}
            label="Numéro NIF"
            type={'text'}
            identifyer={'NIFNumber'}
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
