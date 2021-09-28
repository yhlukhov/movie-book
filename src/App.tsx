import styled from 'styled-components'
import { Header } from './components/Header'

export const App = () => {
  return (
    <AppDiv>
      <Header />
    </AppDiv>
  )
}

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: 'Montserrat';
  background-color: #555555;
`
