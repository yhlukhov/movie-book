import { Body } from './components/body/Body'
import { Footer } from './components/footer/Footer'
import { AppDiv, GlobalStyle } from './styled'
import Top from './components/Header/Top'

export const App = () => {
  return (
    <>
      <AppDiv>
        <Top />
        <Body />
        <Footer />
      </AppDiv>
      <GlobalStyle />
    </>
  )
}
