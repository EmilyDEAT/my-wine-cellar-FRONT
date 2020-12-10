import React, { FormEvent } from 'react'
import axios from 'axios'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface LoginFormElement extends HTMLInputElement {
  firstname: {
    value: string
  }
  lastname: {
    value: string
  }
  email: {
    value: string
  }
  password: {
    value: string
  }
  passwordConfirm: {
    value: string
  }
}

const useStyles = makeStyles(() => ({
  root: {
    width: '70vw',
    height: '70vh',
    'max-height': '300px',
    'max-width': '700px',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-around',
    'flex-direction': 'column',
    margin: '10px'
  },
  input: {
    width: '95%'
  }
}))

const Login = (): JSX.Element => {
  const classes = useStyles()

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const target = e.target as LoginFormElement
      const result = await axios.post('/auth', {
        email: target.email.value,
        password: target.password.value
      })
      localStorage.setItem('userId', result.data.userId)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={submitForm} className={classes.root}>
      <TextField
        required
        type="email"
        id="email"
        name="email"
        label="Email"
        autoComplete="on"
        className={classes.input}
      />
      <TextField
        required
        type="password"
        id="password"
        name="password"
        label="Password"
        autoComplete="off"
        className={classes.input}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default Login
