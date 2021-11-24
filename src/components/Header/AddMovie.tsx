import { useState } from 'react'
import {MovieFormModal, CongratModal} from '../body/modals';
import { AddBtn } from './styled'

// Add Movie component with Add button and Modal Dialog
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
      {isOpen &&<MovieFormModal handleClose={handleClose} />}
      {isCongratOpen && <CongratModal handleClose={()=>setIsCongratOpen(false)} />}
    </>
  )
}
