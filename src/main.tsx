import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'

import './style.css'
import './constants.css'
import './fonts/fonts.css'

import App from './App/App'

const appElement = document.getElementById('app')

if (appElement !== null) {
  const app = ReactDOM.createRoot(appElement)
  app.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}
