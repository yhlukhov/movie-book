import { useState } from 'react'
import { SortByLabel } from './styled'

export const SortBy = () => {
  const [sortBy, setSortBy] = useState('Date')
  return(
    <SortByLabel htmlFor="sortBy">
      <span>Sort By</span>
      <select name="sortBy" id="sortBy" onChange={(e)=>{
        setSortBy(e.target.value)
        console.log(sortBy)
      }}>
        <option value="Date">RELEASE DATE</option>
        <option value="Rating">RATING</option>
        <option value="Title">TITLE</option>
      </select>
    </SortByLabel>
  )
}