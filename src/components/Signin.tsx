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

const Signin = (): JSX.Element => {
  const classes = useStyles()

  const submitForm = async (e: any) => {
    e.preventDefault()
    try {
      await axios.post('/signin', {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        password: e.target.password.value,
        passwordConfirm: e.target.passwordConfirm.value
      })
      console.log('User added')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className={classes.root} onSubmit={submitForm}>
      <TextField
        required
        type="text"
        id="firstname"
        name="firstname"
        label="First name"
        autoComplete="on"
      />
      <TextField
        required
        type="text"
        id="lastname"
        name="lastname"
        label="Last name"
        autoComplete="on"
      />
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
      <TextField
        required
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        label="Confirm password"
        autoComplete="off"
      />
      <Button type="submit" variant="contained">
        Sign In
      </Button>
    </form>
  )
}

export default Signin
