import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Login from './components/Login'

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#10ADBE'
    },
    secondary: {
      main: '#EA022D'
    }
  }
})

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </div>
  )
}

export default App
