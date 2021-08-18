import { Box, Button, CircularProgress, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddNewStartupForm } from './AddNewStartupForm/AddNewStartupForm.js'

import { StartupCard } from './StartupCard/StartupCard.js'

import useStyles from './styles'

export const StartupList = () => {
  const startups = useSelector(state => state.startups.list)
  const [showFormModal, setShowFormModal] = useState(false)
  const [editingStartupId, setEditingStartupId] = useState(null)

  const classes = useStyles()

  const handleEdit = id => {
    setEditingStartupId(id)
    setShowFormModal(true)
  }

  return (
    <Box>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        mb={2}
      >
        <Typography variant='h2'>Startup List</Typography>
        <Button
          variant='outlined'
          size='large'
          onClick={() => setShowFormModal(true)}
        >
          Ajouter une nouvelle entreprise
        </Button>
      </Box>

      {startups.length > 0 ? (
        <Box className={classes.startupListContainer}>
          {startups.map(startup => (
            <StartupCard
              key={startup.id}
              startup={startup}
              handleEdit={handleEdit}
            />
          ))}
        </Box>
      ) : (
        <CircularProgress />
      )}

      <AddNewStartupForm
        open={showFormModal}
        editingStartupId={editingStartupId}
        handleClose={() => {
          setShowFormModal(false)
          setEditingStartupId(null)
        }}
      />
    </Box>
  )
}
