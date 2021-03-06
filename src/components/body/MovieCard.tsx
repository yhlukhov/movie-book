import { FC, useState } from 'react'
import {createSearchParams, useSearchParams} from 'react-router-dom'
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
  const [searchParams, setSearchParams] = useSearchParams()
  const {id, title, genres, release_date, vote_average, poster_path } = movie
  const movieGenre = genres.join(', ')
  const movieYear = release_date ? new Date(release_date).getFullYear() : ''

  const handleClick = () => {
    const sp = createSearchParams(searchParams)
    sp.set('movieId', id)
    setSearchParams(sp)
    window.scrollTo(0, 0)
  }

  return (
    <MovieCardDiv data-testid='movie-card'>
      <div
        className='picture'
        onClick={handleClick}
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
