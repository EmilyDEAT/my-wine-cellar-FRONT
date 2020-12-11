import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Navigation from './Navigation'

import cover from '../images/cover.png'

const useStyles = makeStyles(() => ({
  cover: {
    'max-width': '1000px',
    margin: '0 auto 25px auto'
  },
  image: {
    width: '100%',
    height: 'auto'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className="home-container">
      <div className={classes.cover}>
        <img className={classes.image} src={cover} alt="cover" />
      </div>
      <Navigation />
    </div>
  )
}

export default Home
