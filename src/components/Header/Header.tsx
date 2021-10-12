import { Logo } from '../common/Logo'
import { AddMovie } from './AddMovie'
import { SearchBar } from './SearchBar'
import { HeaderDiv } from './styled'
import { useState } from 'react'
import LoginFormModal from '../body/modals/LoginFormModal'

export const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <>
    <HeaderDiv>
      <div className='top'>
        <Logo />
        <div className='top-right'>
          <div className='login-url' onClick={()=>setLoginOpen(true)}>Login</div>
          <AddMovie />
        </div>
      </div>
      <SearchBar />
    </HeaderDiv>
    {loginOpen && <LoginFormModal handleClose={()=>setLoginOpen(false)} />}
    </>
  )
}
