import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { PageNotFound } from './components/common/PageNotFound'
import { AppDiv, GlobalStyle } from './styled'
import Content from './components/Content';

export const App = () => {
  return (
    <BrowserRouter>
      <AppDiv>
        <Routes>
          <Route path='/' element={<Navigate to='/search' />} />
          <Route path='/search' element={<Content />} />
          <Route path='/search/:searchTerm' element={<Content />} />
          <Route path='*' element={<Navigate to='/not_found' />} />
          <Route path='/not_found' element={<PageNotFound />} />
        </Routes>
      </AppDiv>
      <GlobalStyle />
    </BrowserRouter>
  )
}