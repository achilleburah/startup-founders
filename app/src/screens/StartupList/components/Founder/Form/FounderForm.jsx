import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createFounder } from '../../../../../actions/founder';

const FounderForm = ({ open, editingStartupId, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    dispatch(createFounder(editingStartupId, formData));
  };

  const resetFormAndClose = () => {
    handleClose();
    setFormData({
      firstName: '',
      lastName: '',
      jobTitle: ''
    });
  };

  return (
    <Modal open={open} onClose={resetFormAndClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <Box display='flex' flexDirection='column'>
          <Typography variant='h2' className={classes.formTitle}>
            Nouveau fondateur
          </Typography>

          <form onSubmit={handleSubmit} className={classes.root}>
            <TextField
              name='firstName'
              label='Prénom'
              variant='outlined'
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
              autoFocus
              required
            />

            <TextField
              name='lastName'
              label='Nom'
              variant='outlined'
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
              required
            />

            <TextField
              name='jobTitle'
              label='Intitulé du poste'
              variant='outlined'
              value={formData.jobTitle}
              onChange={(e) => {
                setFormData({ ...formData, jobTitle: e.target.value });
              }}
              required
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
            >
              Ajouter
            </Button>
          </form>
        </Box>
      </Paper>
    </Modal>
  );
};

FounderForm.propTypes = {
  open: Boolean.isRequired,
  editingStartupId: Number.isRequired,
  handleClose: Function.isRequired
};

export default FounderForm;
