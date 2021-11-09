import { ControlBar } from './ControlBar/ControlBar'
import { MovieList } from './MovieList'
import { BodyDiv } from './styled'

export const Body = () => {
  return (
    <BodyDiv>
      <ControlBar />
      <MovieList />
    </BodyDiv>
  )
}
