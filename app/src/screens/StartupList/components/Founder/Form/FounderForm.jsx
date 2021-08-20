import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

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
      <Grid
        container
        item
        xs={12}
        sm={8}
        md={6}
        justifyContent='center'
        alignItems='center'
        className={classes.paper}
      >
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.formTitle} align='center'>
            Nouveau fondateur
          </Typography>
        </Grid>
        <Grid container item xs={12} justifyContent='space-between'>
          <form onSubmit={handleSubmit} className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField
                  name='firstName'
                  label='Prénom'
                  InputLabelProps={{
                    className: classes.textFieldLabel
                  }}
                  variant='outlined'
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                  autoFocus
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name='lastName'
                  label='Nom'
                  InputLabelProps={{
                    className: classes.textFieldLabel
                  }}
                  variant='outlined'
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  name='jobTitle'
                  label='Intitulé du poste'
                  InputLabelProps={{
                    className: classes.textFieldLabel
                  }}
                  variant='outlined'
                  value={formData.jobTitle}
                  onChange={(e) => {
                    setFormData({ ...formData, jobTitle: e.target.value });
                  }}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                  >
                    Ajouter
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Modal>
  );
};

FounderForm.defaultProps = {
  editingStartupId: null
};

FounderForm.propTypes = {
  open: PropTypes.bool.isRequired,
  editingStartupId: PropTypes.number,
  handleClose: PropTypes.func.isRequired
};

export default FounderForm;
