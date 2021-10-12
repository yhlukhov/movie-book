import { FC } from 'react'
import ModalContainer from './ModalContainer'
import MovieForm from './MovieForm'
import { MovieType } from '../../../types'

type PropsType = {
  isOpen: boolean //! do i need to use this property?
  handleClose: Function
  edit?:boolean
  movie?:MovieType
}

const MovieFormModal: FC<PropsType> = ({ isOpen, handleClose, edit, movie }) => {

  return (
    <ModalContainer title={edit ? 'Edit movie' : 'Add movie'} isOpen={isOpen} handleClose={handleClose}>
      <MovieForm edit={edit} movie={movie} />
    </ModalContainer>
  )
}

export default MovieFormModal
