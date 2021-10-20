import { useState, FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { searchTermRecoil } from '../../recoilStore'
import {HintList} from './HintList'
import { Form, SearchInput, SearchButton, Title, ClearIco } from './styled'


export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermRecoil)
  const [input, setInput] = useState('')

  const handleSearch = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(input)
  }
  const clearInput = () => {
    setSearchTerm('')
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
        {searchTerm && <ClearIco onClick={clearInput} /> }
        {input.length > 1 && <HintList input={input} />}
        </label>
        <SearchButton>Search</SearchButton>
      </Form>
    </>
  )
}
