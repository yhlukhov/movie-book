import { FC } from 'react'
import { SortByLabel } from './styled'
import { sotrTypes } from '../../../types'

type SortByProps = {
  setSortType: Function
}

export const SortBy: FC<SortByProps> = ({ setSortType }) => {
  return (
    <SortByLabel htmlFor='sortBy'>
      <span>Sort By</span>
      <select
        name='sortBy'
        id='sortBy'
        onChange={(e) => {
          setSortType(e.target.value)
        }}
      >
        {Object.values(sotrTypes).map((type) => (
          <option value={type} key={type}>{type}</option>
        ))}
      </select>
    </SortByLabel>
  )
}
