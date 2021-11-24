import { useSelector } from 'react-redux'
import { Header } from '.'
import { selectMovie } from '../../store'
import MovieDetails from './MovieDetails'

const Top = () => {
  const movie = useSelector(selectMovie)
  return movie ? <MovieDetails movie={movie} /> : <Header />
}

export default Top
