import { useAppDispatch, setPage, setSortBy  } from '../../../store'
import { sortTypes, SortTypes } from '../../../types'
import { SortByLabel } from './styled'

// Sort selector component
export const SortBy = () => {
  const dispatch = useAppDispatch()

  return (
    <SortByLabel htmlFor='sortBy'>
      <span>Sort By</span>
      <select
        name='sortBy'
        id='sortBy'
        onChange={(e) => {
          dispatch(setPage(1))
          dispatch(setSortBy(e.target.value as SortTypes))
        }}
      >
        {Object.entries(sortTypes).map(([type, value]) => (
          <option value={type} key={type}>{value}</option>
        ))}
      </select>
    </SortByLabel>
  )
}
 