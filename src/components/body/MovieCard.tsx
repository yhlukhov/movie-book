import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMovie } from '../../store/actions'
import { MovieType } from '../../types'
import ContextMenu from './modals/ContextMenu'
import MovieFormModal from './modals/MovieFormModal'
import DeleteMovieModal from './modals/DeleteMovieModal'
import { MovieCardDiv } from './styled'

type PropsType = {
  movie: MovieType
}

export const MovieCard: FC<PropsType> = ({ movie }) => {
  const [contextOpen, setContextOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const dispatch = useDispatch()

  return (
    <MovieCardDiv>
      <img
        className='picture'
        src={movie.imageUrl}
        alt={movie.title}
        onClick={() => dispatch(setMovie(movie))}
      />
      <div className='info-wrapper'>
        <div>
          <div className='movie-title'>{movie.title}</div>
          <div className='movie-genre'>{movie.genre.join(', ')}</div>
        </div>
        <div className='movie-year'>{new Date(movie.releaseDate).getFullYear()}</div>
        <div className='rating'>{movie.rating}</div>
      </div>
      <div className='menu' onClick={() => setContextOpen((prev) => !prev)}>
        ...
      </div>
      {contextOpen && (
        <ContextMenu
          movie={movie}
          setOpen={setContextOpen}
          setFormOpen={setFormOpen}
          setDeleteOpen={setDeleteOpen}
        />
      )}
      {formOpen && <MovieFormModal handleClose={() => setFormOpen(false)} movie={movie} />}
      {deleteOpen && <DeleteMovieModal id={movie.id} handleClose={() => setDeleteOpen(false)} />}
    </MovieCardDiv>
  )
}
