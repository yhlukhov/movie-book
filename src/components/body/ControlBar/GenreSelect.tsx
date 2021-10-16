import { Dispatch, FC, SetStateAction, useState } from 'react'
import { GenreItemLabel, GenreSelectDiv } from './styled'
import { genreList, GenreType } from '../../../types'

type GenreSelectProps = {
  setFilterBy: Dispatch<SetStateAction<"all" | GenreType>>
}

export const GenreSelect: FC<GenreSelectProps> = ({ setFilterBy }) => {
  const [genre, setGenre] = useState('all')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value)
    setFilterBy(e.target.value as "all" | GenreType) 
  }

  const renderGenreSelect = (list: string[]) =>
    list.map((item) => (
      <GenreItemLabel htmlFor={item} key={item} className={item === genre ? 'active' : ''}>
        {item}
        <input
          type='radio'
          id={item}
          name='genre'
          value={item}
          checked={item === genre}
          onChange={handleChange}
        />
      </GenreItemLabel>
    ))

  return <GenreSelectDiv>{renderGenreSelect(['all', ...genreList])}</GenreSelectDiv>
}
