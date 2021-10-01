import { FC } from 'react'
import { MovieCountDiv } from './styled'

interface MovieCountProps {
  count:number
}

export const MovieCount:FC<MovieCountProps> = ({count}) => {
  return(
    <MovieCountDiv><span>{count}</span> movies found</MovieCountDiv>
  )
} 