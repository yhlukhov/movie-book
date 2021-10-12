import { FC, useRef, useCallback, useEffect, MouseEvent } from 'react'
import { CloseBtn, ModalContainerDiv, ModalDiv } from './styled'

type PropsType = {
  title: string
  // isOpen: boolean
  handleClose: Function
}

const ModalContainer: FC<PropsType> = ({ title, handleClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      handleClose()
    }
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  })

  return (
    <ModalContainerDiv ref={modalRef} onClick={(e) => onClose(e)}>
      <ModalDiv>
        <h2>{title}</h2>
        <CloseBtn onClick={() => handleClose()} />
        {children}
      </ModalDiv>
    </ModalContainerDiv>
  )
}

export default ModalContainer
