import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux'
import { fetchContacts } from './redux/contacts'
import './index.css'

store.dispatch(fetchContacts())

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
