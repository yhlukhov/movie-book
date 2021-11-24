import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HintListUl } from './styled'
import {
  useAppDispatch,
  selectMovieHints,
  selectSearchInput,
  setMovie,
  getMovieHints,
  setMovieHints,
} from '../../store'

export const HintList = () => {
  const searchInput = useSelector(selectSearchInput)
  const movieHints = useSelector(selectMovieHints)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(getMovieHints(searchInput))
    }, 500)
    return () => {
      clearTimeout(timeout)
      dispatch(setMovieHints([]))
    }
  }, [searchInput, dispatch])

  return (
    <HintListUl>
      {movieHints.map((movie) => (
        <li onClick={() => dispatch(setMovie(movie))} key={movie.id}>
          {movie.title}
        </li>
      ))}
    </HintListUl>
  )
}
