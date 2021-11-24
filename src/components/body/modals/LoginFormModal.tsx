import { FC } from 'react'
import {LoginForm, ModalContainer} from './'

type LoginFormModalProps = {
  handleClose:()=>void
}

export const LoginFormModal:FC<LoginFormModalProps> = ({handleClose}) => {
  return(
    <ModalContainer title="Log in" handleClose={handleClose}>
      <LoginForm />
    </ModalContainer>
  )
}