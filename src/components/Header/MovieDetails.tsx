import { useDispatch, useSelector } from 'react-redux'
import { MovieDescDiv, SearchIco } from './styled'
import { formatRuntime } from '../../utilities'
import { selectMovie } from '../../store/selectors'
import { setMovie } from '../../store/actions'
import { Logo } from '../common'

const MovieDetails = () => {
  const movie = useSelector(selectMovie)
  const dispatch = useDispatch()

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
        <img src={movie.imageUrl} alt='Banner' />
        <div className='info'>
          <div className='title'>
            <h2>{movie.title}</h2>
            <div className='rating'>{movie.rating}</div>
          </div>
          <div className='genre'>{movie.genre}</div>
          <div className='date'>
            <div>{new Date(movie.releaseDate).getFullYear()}</div>
            <div>{formatRuntime(movie.runtime)}</div>
          </div>
          <div className='description'>{movie.description}</div>
        </div>
      </div>
    </MovieDescDiv>
  ) : null
}

export default MovieDetails
