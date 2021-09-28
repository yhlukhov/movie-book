import { AddBtn } from './styled'

export const AddMovie = () => {
  const handleAdd = () => {
    alert("Add movie")
  }
  return(
    <AddBtn onClick={handleAdd}>+ Add movie</AddBtn>
  )
}