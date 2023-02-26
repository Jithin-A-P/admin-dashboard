import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './state'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

const store = configureStore({
  reducer: {
    golbal: globalReducer
  }
}) 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
