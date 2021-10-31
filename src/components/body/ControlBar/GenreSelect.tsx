import { useSelector } from 'react-redux'
import { genreList } from '../../../types'
import { GenreItemLabel, GenreSelectDiv } from './styled'
import { selectGenre, setGenre, setPage, setSearchTerm, useAppDispatch } from '../../../store'
import { GenreType } from '../../../types/MovieCard'

// Genre selector component
export const GenreSelect = () => {
  const dispatch = useAppDispatch()
  const genre = useSelector(selectGenre)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPage(1))
    dispatch(setGenre(e.target.value as GenreType|'all'))
    dispatch(setSearchTerm(''))
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
