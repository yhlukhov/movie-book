import { useNavigate } from 'react-router-dom'
import { LogoDiv } from './styled'

export const Logo = () => {
  const navigate = useNavigate()
  return(
    <LogoDiv className='logo' onClick={()=>navigate(`/search`)}>
      <span>netflix</span>roulette
    </LogoDiv>
  )
} 