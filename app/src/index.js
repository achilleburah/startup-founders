import React from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import reducers from './reducers'


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
