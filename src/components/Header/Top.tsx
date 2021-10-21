import { useSelector } from 'react-redux'
import { Header } from '.'
import MovieDetails from './MovieDetails'
import {selectMovie} from '../../store/selectors'

const Top = () => {
  const movie = useSelector(selectMovie)
  return movie ? (
    <MovieDetails />
  ) : (
    <Header />
  )
}

export default Top
