import { useSelector } from 'react-redux'
import { useAppDispatch, selectMovie, setMovie } from '../../store'
import { MovieDescDiv, SearchIco } from './styled'
import { formatRuntime } from '../../utilities'
import { MovieType } from '../../types'
import { Logo } from '../common'

const MovieDetails = () => {
  const movie = useSelector(selectMovie)
  const dispatch = useAppDispatch()
  const getYear = (movie:MovieType) => movie.release_date ? new Date(movie.release_date).getFullYear() : ''

  return movie ? (
    <MovieDescDiv>
      {movie.title}
      <div className='desc-top'>
        <Logo />
        <div className='desc-top-right'>
          <SearchIco onClick={() => dispatch(setMovie(null))} />
        </div>
      </div>
      <div className='movie-details'>
        <img src={movie.poster_path} alt='Banner' />
        <div className='info'>
          <div className='title'>
            <h2>{movie.title}</h2>
            <div className='rating'>{movie.vote_average}</div>
          </div>
          <div className='genre'>{movie.genres}</div>
          <div className='date'>
            <div>{getYear(movie)}</div>
            <div>{formatRuntime(movie.runtime)}</div>
          </div>
          <div className='description'>{movie.overview}</div>
        </div>
      </div>
    </MovieDescDiv>
  ) : null
}

export default MovieDetails
