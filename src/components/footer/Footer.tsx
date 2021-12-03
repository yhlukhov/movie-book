import { Logo } from '../common'
import { FooterDiv } from './styled'

export const Footer = () => {
  return(
    <FooterDiv data-testid='footer'>
      <Logo />
    </FooterDiv>
  )
}