import { FC } from 'react'
import { IMovieCard } from '../../types'
import { MovieCardDiv } from './styled'

type PropsType = {
  movie: IMovieCard
}

export const MovieCard: FC<PropsType> = ({ movie }) => {
  return (
    <MovieCardDiv>
      <img className='picture' src={movie.imageUrl} alt={movie.title} />
      <div className='info-wrapper'>
        <div>
          <div className='movie-title'>{movie.title}</div>
          <div className='movie-genre'>{movie.genre}</div>
        </div>
        <div className='movie-year'>{movie.year}</div>
      </div>
      <div className='menu'>...</div>
    </MovieCardDiv>
  )
}
