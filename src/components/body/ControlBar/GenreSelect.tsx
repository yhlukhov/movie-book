import { useDispatch, useSelector } from 'react-redux'
import { GenreItemLabel, GenreSelectDiv } from './styled'
import { genreList } from '../../../types'
import {selectGenre} from '../../../store/selectors'
import {setGenre, setSearchTerm} from '../../../store/actions'

// Genre selector component
export const GenreSelect = () => {
  const dispatch = useDispatch()
  const genre = useSelector(selectGenre)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setGenre(e.target.value))
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
