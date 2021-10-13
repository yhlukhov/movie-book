import { FC } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { StyledForm } from './styled'
import { TextField } from './FormControls'

type LoginFormProps = {}

const LoginForm: FC<LoginFormProps> = () => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 200))
        console.log(values)
      }}
    >
      {({handleReset})=>(
        <StyledForm>
        <TextField type='text' label='User id*' name='login' placeholder='user2021@email.com' />
        <TextField type='password' label='Password*' name='password' placeholder='********' />
        <div className='control-area'>
            <button type='button' className='reset' onClick={handleReset}>
              Reset
            </button>
            <button type='submit' className='submit'>
              Submit
            </button>
          </div>
      </StyledForm>
      )}
      
    </Formik>
  )
}

const validationSchema = yup.object().shape({
  login:yup.string().required().email(),
  password:yup.string().required().min(4).max(40)
})

export default LoginForm
