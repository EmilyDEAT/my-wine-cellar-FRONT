import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    'justify-content': 'space-between',
    'margin-top': '30px',
    'margin-bottom': '30px',
    'margin-right': '1%',
    'margin-left': '1%'
  },
  search: {
    display: 'flex',
    width: '50%',
    'min-width': '200px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.25)
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    width: '100%'
  },
  inputInput: {},
  rightHeader: {
    width: '48px'
  }
}))

const SearchBar = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <IconButton aria-label="back">
        <ArrowBackIcon />
      </IconButton>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.rightHeader} />
    </div>
  )
}

export default SearchBar
