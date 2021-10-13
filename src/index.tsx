import ReactDOM from 'react-dom'
import { ErrorBoundary } from './components/common'
import { App } from './App'
import 'typeface-montserrat'

const AppContainer = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(<AppContainer />, document.querySelector('#root'))
