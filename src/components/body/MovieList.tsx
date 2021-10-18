import { MovieCard } from './MovieCard'
import { MovieCount } from './MovieCount'
import { MovieListDiv } from './styled'
import { sort, filter, search } from '../../utilities'
import { useRecoilValue } from 'recoil'
import { filterBy, movieList, searchTerm, sortBy } from '../../recoilStore'
import { MovieType } from '../../types'

export const MovieList = () => {
  const genre = useRecoilValue(filterBy)
  const sortParam = useRecoilValue(sortBy)
  const searchText = useRecoilValue(searchTerm)
  const movies = useRecoilValue(movieList)
  let moviesList = [] as MovieType[]

  if (searchText) {
    // Perform search by title on movies list:
    moviesList = search(movies, searchText)
  } else {
    // Getting movie list and filtering:
    moviesList = genre === 'all' ? [...movies] : filter(movies, genre)
  }

  // Sorting:
  sort(moviesList, sortParam)

  // Render:
  return (
    <>
      <MovieCount count={movies.length} />
      <MovieListDiv>
        {moviesList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </MovieListDiv>
    </>
  )
}
