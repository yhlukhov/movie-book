import { FC, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { MovieType } from '../../../types'
import { ContextMenuDiv } from '../styled'
import { CloseBtnSm } from './styled'

type ContextMenuProps = {
  movie: MovieType
  setOpen: Dispatch<SetStateAction<boolean>>
  setFormOpen: Dispatch<SetStateAction<boolean>>
  setDeleteOpen: Dispatch<SetStateAction<boolean>>
}

// Movie card context menu with options: Edit, Delete
const ContextMenu: FC<ContextMenuProps> = ({ movie, setOpen, setFormOpen, setDeleteOpen }) => {
  const ref = useRef<HTMLDivElement>(null)
  const handleClose = (e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as Node)) {
      return
    }
    setOpen(false)
  }
  useEffect(() => {
    document.body.addEventListener('click', handleClose)
    return () => document.body.removeEventListener('click', handleClose)
  }, [])
  return (
    <ContextMenuDiv ref={ref}>
      <CloseBtnSm onClick={() => setOpen(false)} />
      <div className='btn' onClick={() => setFormOpen(true)}>
        Edit
      </div>
      <div className='btn' onClick={() => setDeleteOpen(true)}>
        Delete
      </div>
    </ContextMenuDiv>
  )
}

export default ContextMenu
