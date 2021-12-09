import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import store from '../../../store'
import { GenreSelect } from './GenreSelect' 
const WithRouterProvider = (component) => <Provider store={store}><Router>{component}</Router></Provider>

describe('Genre Select', () => {
  beforeEach(() => {
    render(WithRouterProvider(<GenreSelect />))
  })

  it('Renders Genre Select radio buttons', () => {
    expect(screen.getByTestId('genre-select')).toBeInTheDocument()
    expect(screen.getAllByRole('radio', {hidden: true})).toHaveLength(6)
  })

})