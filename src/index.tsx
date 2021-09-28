import ReactDOM from 'react-dom'
import 'typeface-montserrat'
import { App } from './App'
import { ErrorBoundary } from './ErrorBoundary'

const AppContainer = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(<AppContainer />, document.querySelector('#root'))
