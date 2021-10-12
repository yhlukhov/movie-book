import { FC } from 'react'
import ModalContainer from './ModalContainer'
import MovieForm from './MovieForm'
import { MovieType } from '../../../types'

type PropsType = {
  handleClose: Function
  edit?:boolean
  movie?:MovieType
}

const MovieFormModal: FC<PropsType> = ({ handleClose, edit, movie }) => {

  return (
    <ModalContainer title={edit ? 'Edit movie' : 'Add movie'} handleClose={handleClose}>
      <MovieForm edit={edit} movie={movie} handleClose={handleClose} />
    </ModalContainer>
  )
}

export default MovieFormModal
