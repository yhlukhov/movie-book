import { Logo } from '../common'
import { MovieDescDiv, SearchIco } from './styled'
import { formatRuntime } from '../../utilities'
import { useRecoilState } from 'recoil'
import { movieRecoil } from '../../recoilStore'

const MovieDetails = () => {
  const [movie, setMovie] = useRecoilState(movieRecoil)

  return movie ? (
    <MovieDescDiv>
      {movie.title}
      <div className='desc-top'>
        <Logo />
        <div className='desc-top-right'>
          <SearchIco onClick={() => setMovie(null)} />
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
            <div>{movie.releaseDate.getFullYear()}</div>
            <div>{formatRuntime(movie.runtime)}</div>
          </div>
          <div className='description'>{movie.description}</div>
        </div>
      </div>
    </MovieDescDiv>
  ) : null
}

export default MovieDetails
