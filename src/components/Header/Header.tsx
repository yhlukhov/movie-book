import { Logo } from '../common/Logo'
import { AddMovie } from './AddMovie'
import { SearchBar } from './SearchBar'
import { HeaderDiv } from './styled'

export const Header = () => {
  return (
    <HeaderDiv>
      <Logo />
      <AddMovie />
      <SearchBar />
    </HeaderDiv>
  )
}
