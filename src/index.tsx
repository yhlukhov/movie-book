import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ErrorBoundary } from './components/common'
import { App } from './App'
import 'typeface-montserrat'

const AppContainer = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
)

ReactDOM.render(<AppContainer />, document.querySelector('#root'))
