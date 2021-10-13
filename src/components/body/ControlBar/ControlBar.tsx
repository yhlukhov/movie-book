import { FC } from 'react'
import { GenreSelect } from './GenreSelect'
import { SortBy } from './SortBy'
import { ControlDiv } from './styled'

type ControlBarProps = {
  setSortType:Function
}

export const ControlBar:FC<ControlBarProps> = ({setSortType}) => {
  return(
    <ControlDiv>
      <GenreSelect />
      <SortBy setSortType={setSortType} />
    </ControlDiv>
  )
}