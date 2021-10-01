import { MovieCard } from './MovieCard'
import { IMovieCard } from '../../types'
import { FC } from 'react'
import { MovieListDiv } from './styled'
import { MovieCount } from './MovieCount'

interface PropsType {
  movies: IMovieCard[]
}

export const MovieList: FC<PropsType> = ({ movies }) => {
  return (
    <>
      <MovieCount count={movies.length} />
      <MovieListDiv>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </MovieListDiv>
    </>
  )
}
