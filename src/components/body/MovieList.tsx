import {useSelector} from 'react-redux'
import { MovieCard } from './MovieCard'
import { MovieCount } from './MovieCount'
import { MovieListDiv } from './styled'
import { sort, filter, search } from '../../utilities'
import { MovieType } from '../../types'
import {selectMovies, selectSearchTerm, selectGenre, selectSortBy} from '../../store/selectors'

export const MovieList = () => {
  const genre = useSelector(selectGenre)
  const sortBy = useSelector(selectSortBy)
  const searchTerm = useSelector(selectSearchTerm)
  const movies = useSelector(selectMovies)
  let moviesList = [] as MovieType[]

  if (searchTerm) {
    // Perform search by title on movies list:
    moviesList = search(movies, searchTerm)
  } else {
    // Getting movie list and filtering:
    moviesList = genre === 'all' ? [...movies] : filter(movies, genre)
  }

  // Sorting:
  sort(moviesList, sortBy)

  // Render:
  return (
    <>
      <MovieCount count={moviesList.length}/>
      <MovieListDiv>
        {moviesList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </MovieListDiv>
    </>
  )
}