import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { MovieCard } from './MovieCard'
import { MovieCount } from './MovieCount'
import { MovieListDiv } from './styled'
import { Paginator } from './Paginator'
import {
  useAppDispatch,
  getMovies,
  searchMovies,
  selectMovies,
  selectPage,
} from '../../store/'

export const MovieList = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  const genre = searchParams.get('genre')
  const sortBy = searchParams.get('sortBy')
  const searchTerm = params.searchTerm
  const movies = useSelector(selectMovies)
  const page = useSelector(selectPage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(searchTerm ? searchMovies(searchTerm) : getMovies())
  }, [searchTerm, sortBy, genre, page, dispatch])

  return (
    <>
      <MovieCount />
      <MovieListDiv data-testid='movie-list'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </MovieListDiv>
      <Paginator />
    </>
  )
}
