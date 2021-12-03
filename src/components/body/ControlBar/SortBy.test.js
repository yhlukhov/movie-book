import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store'
import { SortBy } from './SortBy'
const WithRouterProvider = (component) => <Provider store={store}><Router>{component}</Router></Provider>

describe('Genre Select', () => {
  beforeEach(() => {
    render(WithRouterProvider(<SortBy />))
  })

  it('Renders Genre Select radio buttons', () => {
    const selector = screen.getByRole('combobox')
    expect(selector).toBeInTheDocument()
  })

  it('Changes Sort By value when user change it', () => {
    const selector = screen.getByRole('combobox')
    expect(screen.getByText(/RATING/i).selected).toBeTruthy()
    userEvent.selectOptions(selector, 'title')
    expect(screen.getByText(/TITLE/i).selected).toBeTruthy()
    expect(screen.getByText(/RATING/i).selected).toBeFalsy()
  })

})