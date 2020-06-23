import React from 'react'
import Input from '../components/atoms/InputText'

export default function Home() {
  return (
    <div>
      <p>Register</p>
      <Input label="Text input" type="text" placeholder="coucou" required={true}></Input>
    </div>
  )
}