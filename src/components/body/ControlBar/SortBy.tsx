import { SortByLabel } from './styled'
import { sotrTypes } from '../../../types'
import { useSetRecoilState } from 'recoil'
import { sortBy } from '../../../recoilStore'

// Sort selector component
export const SortBy = () => {
  const setSortBy = useSetRecoilState(sortBy)
  return (
    <SortByLabel htmlFor='sortBy'>
      <span>Sort By</span>
      <select
        name='sortBy'
        id='sortBy'
        onChange={(e) => {
          setSortBy(e.target.value)
        }}
      >
        {Object.values(sotrTypes).map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </SortByLabel>
  )
}