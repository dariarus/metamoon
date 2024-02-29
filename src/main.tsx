import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'

import './shared/style.css'
import './shared/constants.css'
import '../public/fonts/fonts.css'

import App from './App'

const appElement = document.getElementById('app')

if (appElement !== null) {
  const app = ReactDOM.createRoot(appElement)
  app.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}
