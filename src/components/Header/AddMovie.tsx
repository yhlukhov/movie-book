import { useState } from 'react'
import AddMovieModal from '../body/modals/MovieFormModal'
import { AddBtn } from './styled'

export const AddMovie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddClick = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <AddMovieModal isOpen={isOpen} handleClose={handleClose} />
      <AddBtn onClick={handleAddClick}>+ Add movie</AddBtn>
    </>
  )
}
