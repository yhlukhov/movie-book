import { useSelector } from 'react-redux'
import { PaginatorDiv, LeftArrow, RightArrow } from './styled'
import { selectTotalAmount, selectLimit, selectPage, useAppDispatch, setPage } from '../../store'

export const Paginator = () => {
  const dispatch = useAppDispatch()
  const totalAmount = useSelector(selectTotalAmount)
  const limit = useSelector(selectLimit)
  const page = useSelector(selectPage)
  const pageCount = Math.ceil(totalAmount / limit)

  const setPageById = (id: number) => {
    dispatch(setPage(id))
  }

  return (
    <PaginatorDiv>
      {page > 1 && <LeftArrow onClick={() => setPageById(page - 1)} />}
      <ul className='pages'>
        {page > 2 && <li onClick={() => setPageById(page - 2)}>{page - 2}</li>}
        {page > 1 && <li onClick={() => setPageById(page - 1)}>{page - 1}</li>}
        <li className='active-page'>{page}</li>
        {page < pageCount && <li onClick={() => setPageById(page + 1)}>{page + 1}</li>}
        {page + 1 < pageCount && <li onClick={() => setPageById(page + 2)}>{page + 2}</li>}
      </ul>
      {page < pageCount && <RightArrow onClick={() => setPageById(page + 1)} />}
    </PaginatorDiv>
  )
}
