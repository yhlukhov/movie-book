import { createSearchParams, useSearchParams} from 'react-router-dom'
import { useAppDispatch, setSortBy  } from '../../../store'
import { sortTypes, SortTypes } from '../../../types'
import { SortByLabel } from './styled'
import { useEffect, useState } from 'react'

// Sort selector component
export const SortBy = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    const sortBy = searchParams.get('sortBy')
    sortBy && dispatch(setSortBy(sortBy as SortTypes))
  }, [searchParams, dispatch])

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const sp = createSearchParams(searchParams)
    sp.set('sortBy', e.target.value)
    setSearchParams(sp)
  }

  return (
    <SortByLabel htmlFor='sortBy'>
      <span>Sort By</span>
      <select
        defaultValue={'vote_average'}
        name='sortBy'
        id='sortBy'
        onChange={handleChange}
      >
        {Object.entries(sortTypes).map(([type, value]) => (
          <option value={type} key={type}>{value}</option>
        ))}
      </select>
    </SortByLabel>
  )
}
 