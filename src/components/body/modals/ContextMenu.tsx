import { FC, useEffect, useRef, Dispatch, SetStateAction } from 'react'
import { ContextMenuDiv, CloseBtnSm } from './styled'

type ContextMenuProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  setFormOpen: Dispatch<SetStateAction<boolean>>
  setDeleteOpen: Dispatch<SetStateAction<boolean>>
}

// Movie card context menu with options: Edit, Delete
export const ContextMenu: FC<ContextMenuProps> = ({ setOpen, setFormOpen, setDeleteOpen }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener('click', handleClose)
    return () => document.body.removeEventListener('click', handleClose)
  }, [setOpen])
  
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