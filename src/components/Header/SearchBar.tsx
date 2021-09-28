import { useState, FormEvent } from 'react'
import { Form, SearchInput, SearchButton, Title } from './styled'

export const SearchBar = () => {
  const [input, setInput] = useState('')

  const handleSearch = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input)
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
