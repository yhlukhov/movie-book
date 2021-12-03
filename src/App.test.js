import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from './store'
import {App} from './App'

const WithProvider = (component) => <Provider store={store}>{component}</Provider>

describe('App', () => {
  beforeEach(()=>{
    render(WithProvider(<App />))
  })
  it('Renders App component', () => {
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
  it('Renders Header component', () => {
    expect(screen.getByText(/Find your movie/i)).toBeInTheDocument()
  })
  it('Renders Body component', () => {
    expect(screen.getByText(/movies found/i)).toBeInTheDocument()
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument()
    expect(screen.getByTestId('movie-list')).toBeInTheDocument()
  })
  it('Renders Footer component', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})