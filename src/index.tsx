import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChosenThemeProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ChosenThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
