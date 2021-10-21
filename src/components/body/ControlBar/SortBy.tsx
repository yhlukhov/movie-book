import { SortByLabel } from './styled'
import { sotrTypes } from '../../../types'
import { useDispatch } from 'react-redux'
import {setSortBy} from '../../../store/actions'

// Sort selector component
export const SortBy = () => {
  const dispatch = useDispatch()
  return (
    <SortByLabel htmlFor='sortBy'>
      <span>Sort By</span>
      <select
        name='sortBy'
        id='sortBy'
        onChange={(e) => {
          dispatch(setSortBy(e.target.value))
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