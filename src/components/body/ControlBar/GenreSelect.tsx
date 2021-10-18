import { useState } from 'react'
import { GenreItemLabel, GenreSelectDiv } from './styled'
import { genreList, GenreType } from '../../../types'
import { useSetRecoilState } from 'recoil'
import { filterBy, searchTerm } from '../../../recoilStore'

// Genre selector component
export const GenreSelect = () => {
  const [genre, setGenre] = useState('all')
  const setFilterBy = useSetRecoilState(filterBy)
  const setSearchTerm = useSetRecoilState(searchTerm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value)
    setFilterBy(e.target.value as "all" | GenreType)
    setSearchTerm('')
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
