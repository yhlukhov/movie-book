import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import store from '../../store'
const WithProviderRouter = (component) => <Provider store={store}><Router>{component}</Router></Provider>

describe('Search Bar', () => {
  beforeEach(() => {
    render(WithProviderRouter(<SearchBar />))
  })

  test('Rendres correctly',  () => {
    const tree = renderer.create(WithProviderRouter(<SearchBar />)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders Search Bar elements', () => {
    expect(screen.getByPlaceholderText(/What do you want to watch/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  
  test('Assures Search input is empty', () => {
    expect(screen.getByRole('textbox')).toBeEmptyDOMElement()
  })

  test('Write text into Search input', () => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'Call Me by Your Name'}
    })
    expect(screen.getByRole('textbox')).toHaveValue('Call Me by Your Name')
  })

  test('Search button is rendered', () => {
    expect(screen.getByRole('button', {name: 'Search'})).toBeInTheDocument() 
  })

  test('Click on Search btn submits the form', () => {
    const onSubmit = jest.fn()
    const form = screen.getByTestId('search-form')
    const searchBtn = screen.getByRole('button', {name: 'Search'})
    form.onsubmit = onSubmit
    expect(form).toBeInTheDocument()
    fireEvent.click(searchBtn) 
    expect(onSubmit).toBeCalled()
  })
})