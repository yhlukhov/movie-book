import { useState } from 'react'
import CongratModal from '../body/modals/CongratModal';
import AddMovieModal from '../body/modals/MovieFormModal'
import { AddBtn } from './styled'

export const AddMovie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCongratOpen, setIsCongratOpen] = useState(false)
  const handleAddClick = () => {
    setIsOpen(true)
  }
  const handleClose = (success?:boolean) => {
    setIsOpen(false)
    if (success) {
      setIsCongratOpen(true)
    }
  }
  return (
    <>
      <AddBtn onClick={handleAddClick}>+ Add movie</AddBtn>
      {isOpen &&<AddMovieModal handleClose={handleClose} />}
      {isCongratOpen && <CongratModal handleClose={()=>setIsCongratOpen(false)} />}
    </>
  )
}
