import { FC } from 'react'
import {ModalContainer, MovieForm} from './'
import { MovieType } from '../../../types'

type PropsType = {
  handleClose: (success?: boolean | undefined)=>void
  movie?:MovieType
}

export const MovieFormModal: FC<PropsType> = ({ handleClose, movie }) => {

  return (
    <ModalContainer title={movie ? 'Edit movie' : 'Add movie'} handleClose={handleClose}>
      <MovieForm movie={movie} handleClose={handleClose} />
    </ModalContainer>
  )
}
