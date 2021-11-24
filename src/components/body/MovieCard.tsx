import { FC, useState } from 'react'
import { getMovie, useAppDispatch } from '../../store'
import {ContextMenu, MovieFormModal,DeleteMovieModal}  from './modals/'
import { MovieType } from '../../types'
import { MovieCardDiv } from './styled'

type PropsType = {
  movie: MovieType
}

export const MovieCard: FC<PropsType> = ({ movie }) => {
  const [contextOpen, setContextOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const dispatch = useAppDispatch()
  const {id, title, genres, release_date, vote_average, poster_path } = movie
  const movieGenre = genres.join(', ')
  const movieYear = release_date ? new Date(release_date).getFullYear() : ''

  return (
    <MovieCardDiv>
      <div
        className='picture'
        onClick={() => {
          dispatch(getMovie(id))
          window.scrollTo(0, 0)
        }}
      >
        <img src={poster_path} alt={title} />
      </div>
      <div className='info-wrapper'>
        <div>
          <div className='movie-title'>{title}</div>
          <div className='movie-genre'>{movieGenre}</div>
        </div>
        <div className='movie-year'>{movieYear}</div>
        <div className='rating'>{vote_average}</div>
      </div>
      <div className='menu' onClick={() => setContextOpen((prev) => !prev)}>
        ...
      </div>
      {contextOpen && (
        <ContextMenu
          
          setOpen={setContextOpen}
          setFormOpen={setFormOpen}
          setDeleteOpen={setDeleteOpen}
        />
      )}
      {formOpen && <MovieFormModal handleClose={() => setFormOpen(false)} movie={movie} />}
      {deleteOpen && <DeleteMovieModal id={id} handleClose={() => setDeleteOpen(false)} />}
    </MovieCardDiv>
  )
}
