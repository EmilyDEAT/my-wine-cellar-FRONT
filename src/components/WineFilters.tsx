import React, { ChangeEvent, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

const wineTypes = [
  { value: 'all', label: 'All' },
  { value: 'red', label: 'Red' },
  { value: 'white', label: 'White' },
  { value: 'rose', label: 'Rosé' },
  { value: 'sparkling', label: 'Sparkling' }
]

const wineRegions = [
  { value: 'all', label: 'All' },
  { value: 'bordeaux', label: 'Bordeaux' },
  { value: 'bourgogne', label: 'Bourgogne' },
  { value: 'loire', label: 'Loire' },
  { value: 'alsace', label: 'Alsace' },
  { value: 'languedoc', label: 'Languedoc' },
  { value: 'other', label: 'Other' }
]

const wineYears = [
  { value: 'all', label: 'All' },
  { value: 'less3', label: 'Less than 3 years of age' },
  { value: '3to5', label: '3 to 5 years of age' },
  { value: '5to7', label: '5 to 7 years of age' },
  { value: '7to10', label: '7 to 10 years of age' },
  { value: '10to15', label: '10 to 15 years of age' },
  { value: '15to20', label: '15 to 20 years of age' },
  { value: 'more20', label: 'More than 20 years of age' }
]

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '15px'
  },
  formHelperTextRoot: {
    display: 'none'
  }
}))

const WineFilters = (): JSX.Element => {
  const classes = useStyles()
  const [wineType, setWineType] = useState('all')
  const [wineRegion, setWineRegion] = useState('all')
  const [wineYear, setWineYear] = useState('all')

  const handleWineTypeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setWineType(event.target.value as string)
  }

  const handleWineRegionChange = (event: ChangeEvent<{ value: unknown }>) => {
    setWineRegion(event.target.value as string)
  }

  const handleWineYearChange = (event: ChangeEvent<{ value: unknown }>) => {
    setWineYear(event.target.value as string)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {/* Wine type */}
          <TextField
            id="wine-type-id"
            select
            fullWidth
            FormHelperTextProps={{
              classes: { root: classes.formHelperTextRoot }
            }}
            label="Type"
            value={wineType}
            onChange={handleWineTypeChange}
            helperText="Filter by wine type"
            variant="outlined"
          >
            {wineTypes.map((t) => (
              <MenuItem key={t.value} value={t.value}>
                {t.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          {/* Wine Region */}
          <TextField
            id="wine-region-id"
            select
            fullWidth
            FormHelperTextProps={{
              classes: { root: classes.formHelperTextRoot }
            }}
            label="Region"
            value={wineRegion}
            onChange={handleWineRegionChange}
            helperText="Filter by wine region"
            variant="outlined"
          >
            {wineRegions.map((r) => (
              <MenuItem key={r.value} value={r.value}>
                {r.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          {/* Wine Year */}
          <TextField
            id="wine-year-id"
            select
            fullWidth
            FormHelperTextProps={{
              classes: { root: classes.formHelperTextRoot }
            }}
            label="Year of Age"
            value={wineYear}
            onChange={handleWineYearChange}
            helperText="Filter by wine year of age"
            variant="outlined"
          >
            {wineYears.map((y) => (
              <MenuItem key={y.value} value={y.value}>
                {y.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </div>
  )
}

export default WineFilters
