import { useState } from 'react'
import { GenreItemLabel, GenreSelectDiv } from './styled'
import { genreList } from '../../../types'

export const GenreSelect = () => {
  const [genre, setGenre] = useState('all')
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value) 
  }

  const renderGenreSelect = (list:string[]) => {
    return list.map(item => (
      <GenreItemLabel htmlFor={item} key={item} className={(item === genre) ? 'active' : ''}>
        {item}
        <input type='radio' id={item} name='genre' value={item} checked={item===genre} onChange={handleChange} />
      </GenreItemLabel>
    ))
  }

  return (
    <GenreSelectDiv>
      {renderGenreSelect(['all', ...genreList])} 
    </GenreSelectDiv>
  )
}
