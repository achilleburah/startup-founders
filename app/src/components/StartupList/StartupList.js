import { Box, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { StartupCard } from './StartupCard/StartupCard.js'

import useStyles from './styles'

export const StartupList = () => {
  const startups = useSelector(state => state.startups.list)

  const classes = useStyles()

  const listItems =
    startups &&
    startups.map(startup => <StartupCard key={startup.id} startup={startup} />)

  useEffect(() => {
    console.log('state.startups.list', startups)
    console.log('typeof', typeof startups)
  }, [startups])

  return (
    <Box>
      <Typography>Startup List</Typography>
      {startups ? (
        <Box className={classes.startupListContainer}>{listItems}</Box>
      ) : (
        <Typography>No Startups</Typography>
      )}
    </Box>
  )
}
