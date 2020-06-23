import React from 'react'
import Input from '../components/atoms/InputText'
import FormButton from '../components/atoms/FormButton'
import { ReactComponent as Icon } from '../assets/icons/gouv.svg'

export default function Home() {
  return (
    <div>
      {/* <Input label="Text input" hint={true} type="text" placeholder="coucou" required={true}></Input> */}
      <FormButton size={''} icon={Icon} isFormButton={true}></FormButton>
    </div>
  )
}