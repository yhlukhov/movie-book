import { FC } from 'react'
import { HintListUl } from './styled'
import {setMovie} from '../../store/actions'
import { search } from '../../utilities'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovies } from '../../store/selectors'


type HistListProps = {
  input:string
}

export const HintList:FC<HistListProps> = ({input}) => {
  const dispatch = useDispatch()
  const movies = useSelector(selectMovies)
  const hintList = search(movies, input)
  
  return (
    <HintListUl>
      {hintList.map(movie => <li onClick={()=>dispatch(setMovie(movie))}>{movie.title}</li>)}
    </HintListUl>
  )
}
