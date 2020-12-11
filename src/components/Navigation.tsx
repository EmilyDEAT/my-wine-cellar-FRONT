import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import wines from '../images/wines.png'
import profil from '../images/profil.png'

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: 'auto',
    display: 'grid',
    'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
    'justify-items': 'center',
    'grid-gap': '20px'
  },
  imageContainer: {
    width: '200px',
    height: '200px',
    color: 'white',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
    display: 'flex',
    'align-items': 'flex-end',
    position: 'relative',
    borderRadius: '5px'
  },
  overlay: {
    'background-color': 'rgba(23, 39, 56, 0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '5px'
  },
  text: {
    zIndex: 1,
    'margin-left': '15px',
    'margin-bottom': '10px',
    width: '10px'
  }
})

const Navigation = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${wines})` }}
      >
        <Typography className={classes.text} variant="h3" gutterBottom>
          MES VINS
        </Typography>
        <div className={classes.overlay} />
      </div>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${profil})` }}
      >
        <Typography className={classes.text} variant="h3" gutterBottom>
          MON PROFIL
        </Typography>
        <div className={classes.overlay} />
      </div>
    </div>
  )
}

export default Navigation
