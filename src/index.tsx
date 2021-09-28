import ReactDOM from 'react-dom'
import { App } from './App'
import { ErrorBoundary } from './ErrorBoundary'

const AppContainer = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

ReactDOM.render(<AppContainer />, document.querySelector('#root'))
