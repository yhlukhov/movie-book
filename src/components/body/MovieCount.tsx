import { useSelector } from 'react-redux'
import {selectTotalAmount} from '../../store'
import { MovieCountDiv } from './styled'

export const MovieCount = () => {
  const count = useSelector(selectTotalAmount)
  return(
    <MovieCountDiv><span>{count}</span> movies found</MovieCountDiv>
  )
} 