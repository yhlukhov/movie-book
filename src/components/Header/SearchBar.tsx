import { useState, FormEvent } from 'react'
import { Form, SearchInput, SearchButton, Title } from './styled'
import { useSetRecoilState } from 'recoil'
import { searchTerm } from '../../recoilStore'

export const SearchBar = () => {
  const setSearchTerm = useSetRecoilState(searchTerm)
  const [input, setInput] = useState('')

  const handleSearch = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(input)
  }

  return (
    <>
      <Title>Find your movie</Title>
      <Form onSubmit={handleSearch}>
        <SearchInput
          type='text'
          value={input}
          placeholder='What do you want to watch?'
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchButton>Search</SearchButton>
      </Form>
    </>
  )
}
