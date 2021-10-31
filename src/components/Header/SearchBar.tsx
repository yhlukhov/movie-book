import { FormEvent } from 'react'
import { useSelector } from 'react-redux'
import { Form, SearchInput, SearchButton, Title, ClearIco } from './styled'
import { HintList } from './HintList'
import {
  useAppDispatch,
  selectSearchInput,
  setSearchInput,
  setSearchTerm,
  setMovieHints,
  setPage,
} from '../../store'

export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const searchInput = useSelector(selectSearchInput)

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSearchTerm(searchInput))
    dispatch(setMovieHints([]))
    dispatch(setPage(1))
  }
  const clearInput = () => {
    dispatch(setSearchTerm(''))
    dispatch(setSearchInput(''))
    dispatch(setPage(1))
  }

  return (
    <>
      <Title>Find your movie</Title>
      <Form onSubmit={handleSearch}>
        <label>
          <SearchInput
            type='text'
            value={searchInput}
            placeholder='What do you want to watch?'
            onChange={(e) => dispatch(setSearchInput(e.target.value))}
          />
          {searchInput && <ClearIco onClick={clearInput} />}
          {searchInput.length > 1 && <HintList />}
        </label>
        <SearchButton>Search</SearchButton>
      </Form>
    </>
  )
}
