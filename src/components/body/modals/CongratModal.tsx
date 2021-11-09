import { FC } from 'react'
import ModalContainer from './ModalContainer'
import { CheckIcon, CongratDialog } from './styled'

type CongratModalProps = {
  handleClose: ()=>void
}

const CongratModal: FC<CongratModalProps> = ({ handleClose }) => (
  <ModalContainer title='' handleClose={handleClose}>
    <CongratDialog>
      <CheckIcon />
      <h2>Congratulations!</h2>
      <p>The movie has been added to database successfully</p>
    </CongratDialog>
  </ModalContainer>
)

export default CongratModal
