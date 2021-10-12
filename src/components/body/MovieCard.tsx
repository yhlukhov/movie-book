import { FC, useState } from 'react'
import { MovieType } from '../../types'
import ContextMenu from './modals/ContextMenu'
import { MovieCardDiv } from './styled'
import MovieFormModal from './modals/MovieFormModal'
import DeleteMovieModal from './modals/DeleteMovieModal'

type PropsType = {
  movie: MovieType
}

export const MovieCard: FC<PropsType> = ({ movie }) => {
  const [contextOpen, setContextOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  return (
    <MovieCardDiv>
      <img className='picture' src={movie.imageUrl} alt={movie.title} />
      <div className='info-wrapper'>
        <div>
          <div className='movie-title'>{movie.title}</div>
          <div className='movie-genre'>{movie.genre.join(', ')}</div>
        </div>
        <div className='movie-year'>{movie.releaseDate.getFullYear()}</div>
      </div>
      <div className='menu' onClick={()=>setContextOpen(prev => !prev)}>...</div>
      {contextOpen && <ContextMenu movie={movie} setOpen={setContextOpen} setFormOpen={setFormOpen} setDeleteOpen={setDeleteOpen} /> }
      {formOpen && <MovieFormModal handleClose={()=>setFormOpen(false)} edit={true} movie={movie}/>}
      {deleteOpen && <DeleteMovieModal id={movie.id} handleClose={()=>setDeleteOpen(false)} />}
    </MovieCardDiv>
  )
}