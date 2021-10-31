import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { ModalContainer } from './'
import { DeleteDialog } from './styled'
import { removeMovie } from '../../../store/movieSlice'

type DeleteMovieModalProps = {
  id: string
  handleClose: () => void
}

export const DeleteMovieModal: FC<DeleteMovieModalProps> = ({ id, handleClose }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(removeMovie(id))
    handleClose()
  }
  return (
    <ModalContainer title='Delete movie' handleClose={handleClose}>
      <DeleteDialog>
        <p>Are you sure you want to delete this movie?</p>
        <button onClick={handleDelete}>Confirm</button>
      </DeleteDialog>
    </ModalContainer>
  )
}