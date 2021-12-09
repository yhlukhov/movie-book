import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import { MovieList } from './MovieList'
const WithRouterProvider = (component) => <Provider store={store}><Router>{component}</Router></Provider>

describe('Movie List', () => {
  beforeEach(()=>{
    render(WithRouterProvider(<MovieList />))
  })

  it('Renders Movie List', async () => {
    expect(screen.queryByTestId('movie-list')).toBeInTheDocument()
  })

  it('Loads 12 Movie Items per page', async() => {
    expect(await screen.findAllByTestId('movie-card')).toHaveLength(12)
  })
})