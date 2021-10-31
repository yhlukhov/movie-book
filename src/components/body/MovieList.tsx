import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MovieCard } from './MovieCard'
import { MovieCount } from './MovieCount'
import { MovieListDiv } from './styled'
import { Paginator } from './Paginator'
import {
  useAppDispatch,
  getMovies,
  searchMovies,
  selectMovies,
  selectSearchTerm,
  selectGenre,
  selectSortBy,
  selectPage,
} from '../../store/'

export const MovieList = () => {
  const genre = useSelector(selectGenre)
  const sortBy = useSelector(selectSortBy)
  const searchTerm = useSelector(selectSearchTerm)
  const movies = useSelector(selectMovies)
  const page = useSelector(selectPage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(searchTerm ? searchMovies(searchTerm) : getMovies())
  }, [searchTerm, sortBy, genre, page, dispatch])

  return (
    <>
      <MovieCount />
      <MovieListDiv>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </MovieListDiv>
      <Paginator />
    </>
  )
}
