import React, { ChangeEvent, useState } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import LoginImage from '../images/login.jpg'

const useStyles = makeStyles(() => ({
  root: {
    'min-width': '100vw',
    'min-height': '100vh',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    backgroundImage: `url(${LoginImage})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center'
  }
}))

const Login = (): JSX.Element => {
  const [tabId, setTabId] = useState(0)

  const onTabsChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setTabId(newValue)
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper variant="outlined" elevation={3}>
        <Tabs
          value={tabId}
          indicatorColor="primary"
          textColor="primary"
          onChange={onTabsChange}
          aria-label="Login Form"
          variant="fullWidth"
          centered
        >
          <Tab label="Log In" />
          <Tab label="Sign Up" />
        </Tabs>
        {tabId === 0 ? <LoginForm /> : <SignupForm />}
      </Paper>
    </div>
  )
}

export default Login
