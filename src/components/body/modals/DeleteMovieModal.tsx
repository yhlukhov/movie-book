import { FC } from 'react'
import ModalContainer from './ModalContainer'
import { DeleteDialog } from './styled'

type DeleteMovieModalProps = {
  id: string
  handleClose: ()=>void
}

const DeleteMovieModal: FC<DeleteMovieModalProps> = ({ id, handleClose }) => {
  const handleDelete = () => {
    console.log('Delte movie by id: ', id)
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

export default DeleteMovieModal
