import { FC } from 'react'
import { MovieCard } from './MovieCard'
import { MovieCount } from './MovieCount'
import { MovieListDiv } from './styled'
import { GenreType, MovieType } from '../../types'
import { sort, filter } from '../../utilities'

interface PropsType {
  movies: MovieType[]
  sortBy: string
  genre: GenreType | 'all'
}

export const MovieList: FC<PropsType> = ({ movies, sortBy, genre }) => {
  // Getting movie list and filtering:
  const moviesList = genre === 'all' ? [...movies] : filter(movies, genre)
  // Sorting:
  sort(moviesList, sortBy)
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