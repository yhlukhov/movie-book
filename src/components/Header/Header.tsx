import { Logo } from '../common/Logo'
import { AddMovie } from './AddMovie'
import { SearchBar } from './SearchBar'
import { HeaderDiv } from './styled'
import { useState } from 'react'
import LoginFormModal from '../body/modals/LoginFormModal'


export const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const handleOpen = () => {
    setLoginOpen(true)
  }
  const handleClose = () => {
    setLoginOpen(false)
  }
  return (
    <>
    <HeaderDiv>
      <div className='header-top'>
        <Logo />
        <div className='header-top-right'>
          <div className='login-url' onClick={handleOpen}>Login</div>
          <AddMovie />
        </div>
      </div>
      <SearchBar />
    </HeaderDiv>
    {loginOpen && <LoginFormModal handleClose={handleClose} />}
    </>
  )
}
