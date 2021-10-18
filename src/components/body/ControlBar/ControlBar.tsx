import { GenreSelect } from './GenreSelect'
import { SortBy } from './SortBy'
import { ControlDiv } from './styled'

export const ControlBar = () => {
  return(
    <ControlDiv>
      <GenreSelect />
      <SortBy />
    </ControlDiv>
  )
}