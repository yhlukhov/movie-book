import { useRecoilValue } from 'recoil'
import { Header } from '.'
import { movieRecoil } from '../../recoilStore'
import MovieDetails from './MovieDetails'

const Top = () => {
  const movie = useRecoilValue(movieRecoil)
  return movie ? (
    <MovieDetails />
  ) : (
    <Header />
  )
}

export default Top
