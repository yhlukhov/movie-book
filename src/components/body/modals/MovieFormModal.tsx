import { FC } from 'react'
import ModalContainer from './ModalContainer'
import MovieForm from './MovieForm'
import { MovieType } from '../../../types'

type PropsType = {
  handleClose: (success?: boolean | undefined)=>void
  movie?:MovieType
}

const MovieFormModal: FC<PropsType> = ({ handleClose, movie }) => {

  return (
    <ModalContainer title={movie ? 'Edit movie' : 'Add movie'} handleClose={handleClose}>
      <MovieForm movie={movie} handleClose={handleClose} />
    </ModalContainer>
  )
}

export default MovieFormModal
