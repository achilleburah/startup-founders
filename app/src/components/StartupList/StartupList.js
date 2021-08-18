import { Box, Button, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddNewStartupForm } from '../AddNewStartupForm/AddNewStartupForm.js'

import { StartupCard } from './StartupCard/StartupCard.js'

import useStyles from './styles'

export const StartupList = () => {
  const startups = useSelector(state => state.startups.list)
  const [showFormModal, setShowFormModal] = useState(false)

  const classes = useStyles()

  const listItems =
    startups &&
    startups.map(startup => <StartupCard key={startup.id} startup={startup} />)

  return (
    <Box>
      <Typography variant='h2'>Startup List</Typography>
      {startups ? (
        <Box className={classes.startupListContainer}>{listItems}</Box>
      ) : (
        <Typography>No Startups</Typography>
      )}
      <Button size='large' onClick={() => setShowFormModal(true)}>
        Ajouter une nouvelle entreprise
      </Button>
      <AddNewStartupForm
        open={showFormModal}
        handleClose={() => setShowFormModal()}
      />
    </Box>
  )
}
