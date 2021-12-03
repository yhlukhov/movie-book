import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import { Header } from './Header'
const WithRouterProvider = (component) => <Provider store={store}><Router>{component}</Router></Provider>

describe('Header', () => {
  beforeEach(()=>{
    render(WithRouterProvider(<Header />))
  })

  it('Renders Header', async () => {
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('Opens/Closes Login dialog', () => {
    userEvent.click(screen.getByText(/Login/i))
    expect(screen.getByTestId(/login-modal/i)).toBeInTheDocument()
    userEvent.click(screen.getByTestId(/close-modal-btn/i))
    expect(screen.queryByTestId(/login-modal/i)).not.toBeInTheDocument()
  })
  
  it('Opens/Closes AddMovie dialog', () => {
    userEvent.click(screen.getByText(/Add movie/i))
    expect(screen.getByTestId(/add-movie-modal/i)).toBeInTheDocument()
    userEvent.click(screen.getByTestId(/close-modal-btn/i))
    expect(screen.queryByTestId(/add-movie-modal/i)).not.toBeInTheDocument()
  })

})