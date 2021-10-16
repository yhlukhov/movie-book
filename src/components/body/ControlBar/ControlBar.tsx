import { Dispatch, FC, SetStateAction } from 'react'
import { GenreType } from '../../../types'
import { GenreSelect } from './GenreSelect'
import { SortBy } from './SortBy'
import { ControlDiv } from './styled'

type ControlBarProps = {
  setSortType:Dispatch<SetStateAction<string>>
  setFilterBy:Dispatch<SetStateAction<"all" | GenreType>>
}

export const ControlBar:FC<ControlBarProps> = ({setSortType, setFilterBy}) => {
  return(
    <ControlDiv>
      <GenreSelect setFilterBy={setFilterBy} />
      <SortBy setSortType={setSortType} />
    </ControlDiv>
  )
}