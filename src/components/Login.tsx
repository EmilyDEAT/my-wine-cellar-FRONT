import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const Login = (): JSX.Element => {
  const classes = useStyles()

  const submitForm = async (e: any) => {
    e.preventDefault()
    try {
      const result = await axios.post('/auth', {
        email: e.target.email.value,
        password: e.target.password.value
      })
      localStorage.setItem('userId', result.data.userId)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={classes.root} onSubmit={submitForm}>
      <TextField
        required
        type="email"
        id="email"
        name="email"
        label="Email"
        autoComplete="on"
      />
      <TextField
        required
        type="password"
        id="password"
        name="password"
        label="Password"
        autoComplete="off"
      />
      <Button type="submit" variant="contained">
        Log In
      </Button>
    </form>
  )
}

export default Login
