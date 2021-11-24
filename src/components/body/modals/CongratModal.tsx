import { FC } from 'react'
import { ModalContainer } from './'
import { selectAddMovieTitle, useAppSelector } from '../../../store'
import { CheckIcon, CongratDialog } from './styled'

type CongratModalProps = {
  handleClose: () => void
}

export const CongratModal: FC<CongratModalProps> = ({ handleClose }) => {
  const addMovieTitle = useAppSelector(selectAddMovieTitle)
  return (
    <ModalContainer title='' handleClose={handleClose}>
      <CongratDialog>
        <CheckIcon />
        <h2>Congratulations!</h2>
        <p>The movie "{addMovieTitle}" has been added to database successfully</p>
      </CongratDialog>
    </ModalContainer>
  )
}
