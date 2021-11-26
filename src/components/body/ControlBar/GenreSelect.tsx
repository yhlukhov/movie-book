import { createSearchParams, useSearchParams } from 'react-router-dom'
import { genreList } from '../../../types'
import { GenreItemLabel, GenreSelectDiv } from './styled'
import { setGenre, useAppDispatch } from '../../../store'
import { GenreType } from '../../../types/MovieCard'
import { useEffect, useState } from 'react'

// Genre selector component
export const GenreSelect = () => {
  const dispatch = useAppDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  const [genre, setGenreState] = useState(searchParams.get('genre')) 

  useEffect(() => {
    const genre = (searchParams.get('genre') as GenreType) || 'all'
    setGenreState(genre)
    dispatch(setGenre(genre))
    
  }, [searchParams, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sp = createSearchParams(searchParams)
    sp.set('genre', e.target.value)
    setSearchParams(sp)
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