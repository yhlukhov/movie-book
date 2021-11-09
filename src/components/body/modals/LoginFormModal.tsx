import { FC } from 'react'
import LoginForm from './LoginForm'
import ModalContainer from './ModalContainer'

type LoginFormModalProps = {
  handleClose:()=>void
}

const LoginFormModal:FC<LoginFormModalProps> = ({handleClose}) => {
  return(
    <ModalContainer title="Log in" handleClose={handleClose}>
      <LoginForm />
    </ModalContainer>
  )
}

export default LoginFormModal