import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { selectMovie, getMovie, setMovie } from '../../store'
import MovieDetails from './MovieDetails'
import { Header } from '.'

const Top = () => {
  const movie = useSelector(selectMovie)
  const searchParams = useSearchParams()[0]
  const dispatch = useDispatch()

  useEffect(() => {
    const id = searchParams.get('movieId')
    if (id) {
      dispatch(getMovie(id))
    } else {
      dispatch(setMovie(null))
    }
  }, [searchParams, dispatch])

  return movie ? (
    <MovieDetails movie={movie} />
  ) : (
    <Header />
  )
}

export default Top
