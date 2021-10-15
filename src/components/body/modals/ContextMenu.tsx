import { FC, useEffect, useRef } from 'react'
import { MovieType } from '../../../types'
import { ContextMenuDiv } from '../styled'
import { CloseBtnSm } from './styled'
import { useTimeout } from '../../../utilities/customHooks'

type ContextMenuProps = {
  movie: MovieType
  setOpen: Function
  setFormOpen: Function
  setDeleteOpen: Function
}

const ContextMenu: FC<ContextMenuProps> = ({ movie, setOpen, setFormOpen, setDeleteOpen }) => {
  const cancel = useTimeout(()=>console.log('Timeout 1500'), 1500)

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
      <CloseBtnSm onClick={()=>setOpen(false)} />
      <div className='btn' onClick={()=>setFormOpen(true)}>Edit</div>
      <div className='btn' onClick={()=>setDeleteOpen(true)}>Delete</div>
      <button onClick={()=>cancel()}>cancel timeout</button>
    </ContextMenuDiv>
  )
}

export default ContextMenu
