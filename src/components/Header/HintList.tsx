import { FC } from 'react'
import { HintListUl } from './styled'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { movieList, movieRecoil } from '../../recoilStore'
import { search } from '../../utilities'


type HistListProps = {
  input:string
}

export const HintList:FC<HistListProps> = ({input}) => {
  const setMovie = useSetRecoilState(movieRecoil)
  const movies = useRecoilValue(movieList)
  const hintList = search(movies, input)
  
  return (
    <HintListUl>
      {hintList.map(movie => <li onClick={()=>setMovie(movie)}>{movie.title}</li>)}
    </HintListUl>
  )
}
