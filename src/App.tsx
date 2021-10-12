import { Body } from './components/body/Body'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header'
import { AppDiv, GlobalStyle } from './styled'

export const App = () => {
  return (
    <>
      <AppDiv>
        <Header />
        <Body />
        <Footer />
      </AppDiv>
      <GlobalStyle />
    </>
  )
}
