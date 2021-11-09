import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { ErrorBoundary } from './components/common'
import { App } from './App'
import 'typeface-montserrat'

const AppContainer = () => (
  <ErrorBoundary>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ErrorBoundary>
)

ReactDOM.render(<AppContainer />, document.querySelector('#root'))
