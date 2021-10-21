import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../store/actions'
import { Form, SearchInput, SearchButton, Title, ClearIco } from './styled'
import { HintList } from './HintList'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSearchTerm(input))
  }
  const clearInput = () => {
    dispatch(setSearchTerm(''))
    setInput('')
  }

  return (
    <>
      <Title>Find your movie</Title>
      <Form onSubmit={handleSearch}>
        <label>
          <SearchInput
            type='text'
            value={input}
            placeholder='What do you want to watch?'
            onChange={(e) => setInput(e.target.value)}
          />
          {input && <ClearIco onClick={clearInput} />}
          {input.length > 1 && <HintList input={input} />}
        </label>
        <SearchButton>Search</SearchButton>
      </Form>
    </>
  )
}
