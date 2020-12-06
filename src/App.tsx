import React from 'react'
import Signin from './components/Signin'
import Login from './components/Login'

import './App.css'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Signin />
      <Login />
    </div>
  )
}

export default App
