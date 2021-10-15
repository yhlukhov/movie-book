import { FC } from 'react'
import { MovieCard } from './MovieCard'
import { MovieCount } from './MovieCount'
import { MovieListDiv } from './styled'
import { MovieType } from '../../types'
import { sort } from '../../utilities'

interface PropsType {
  movies: MovieType[]
  sortBy: string
}

export const MovieList: FC<PropsType> = ({ movies, sortBy }) => {
  const moviesList = [...movies]
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
