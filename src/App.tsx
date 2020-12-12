import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Signin from './components/Signin'
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
        <Signin />
        <Login />
      </ThemeProvider>
    </div>
  )
}

export default App
