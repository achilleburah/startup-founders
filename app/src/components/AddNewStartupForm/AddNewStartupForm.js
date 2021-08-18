import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStartup } from '../../actions/startups'
import useStyles from './styles'

export const AddNewStartupForm = ({ open, handleClose }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: 'CP',
    city: 'Paris',
    country: 'France',
    creationDate: '2021-07-13',
    headline: 'Shazam',
    description: 'Lorem Ipsum'
  })

  const handleSubmit = e => {
    e.preventDefault()
    handleClose()
    dispatch(createStartup(formData))
  }
  console.log('Open', open)

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <Typography variant='h2' className={classes.formTitle}>
          Créer une nouvelle startup
        </Typography>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField
            name='name'
            label='Nom'
            variant='outlined'
            value={formData.name}
            onChange={e => {
              setFormData({ ...formData, name: e.target.value })
            }}
            autoFocus
            fullWidth
            required
          />

          <TextField
            name='city'
            label='Ville'
            variant='outlined'
            value={formData.city}
            onChange={e => {
              setFormData({ ...formData, city: e.target.value })
            }}
            fullWidth
            required
          />

          <TextField
            name='country'
            label='Pays'
            variant='outlined'
            value={formData.country}
            onChange={e => {
              setFormData({ ...formData, country: e.target.value })
            }}
            fullWidth
            required
          />

          <TextField
            type='date'
            name='creationDate'
            label='Date de Création'
            variant='outlined'
            value={formData.creationDate}
            onChange={e => {
              setFormData({ ...formData, creationDate: e.target.value })
            }}
            fullWidth
            required
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            name='headline'
            label='Résumé'
            variant='outlined'
            value={formData.headline}
            onChange={e => {
              setFormData({ ...formData, headline: e.target.value })
            }}
            fullWidth
            required
          />

          <TextField
            name='description'
            label='Description'
            variant='outlined'
            value={formData.description}
            onChange={e => {
              setFormData({ ...formData, description: e.target.value })
            }}
            fullWidth
            multiline
            required
          />

          <Button
            type='submit'
            variant='contained'
            color='primary'
            size='large'
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Modal>
  )
}
