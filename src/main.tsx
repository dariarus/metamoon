import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import './fonts/fonts.css'
import './vendor/normalize.css'

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
