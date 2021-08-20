import React, { useEffect, useState } from 'react';
import { Button, Grid, Modal, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { createStartup, updateStartup } from '../../../../../actions/startups';
import useStyles from './styles';

export const StartupForm = ({ open, editingStartupId, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const editingStartup = useSelector((state) =>
    editingStartupId
      ? state.startups.list.find((startup) => startup._id === editingStartupId)
      : null
  );

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    creationDate: '',
    headline: '',
    description: ''
  });

  useEffect(() => {
    if (editingStartup) {
      const formatedCreationDate = editingStartup.creationDate
        ? new Date(editingStartup.creationDate).toISOString().split('T')[0]
        : null;

      setFormData({
        name: editingStartup.name,
        city: editingStartup.city,
        country: editingStartup.country,
        creationDate: formatedCreationDate,
        headline: editingStartup.headline,
        description: editingStartup.description
      });
    }
  }, [editingStartup, editingStartupId]);

  const resetFormAndClose = () => {
    handleClose();
    setFormData({
      name: '',
      city: '',
      country: '',
      creationDate: '',
      headline: '',
      description: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetFormAndClose();

    if (editingStartupId) {
      dispatch(updateStartup(editingStartupId, formData));
    } else {
      dispatch(createStartup(formData));
    }
  };

  return (
    <Modal open={open} onClose={resetFormAndClose} className={classes.modal}>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent='center'
        className={classes.paper}
      >
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.formTitle} align='center'>
            {editingStartupId
              ? 'Modifier la startup'
              : 'Créer une nouvelle startup'}
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit} className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name='name'
                label='Nom'
                InputLabelProps={{
                  className: classes.textFieldLabel
                }}
                variant='outlined'
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                autoFocus
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                name='city'
                label='Ville'
                InputLabelProps={{
                  className: classes.textFieldLabel
                }}
                color='textPrimary'
                variant='outlined'
                value={formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                }}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name='country'
                label='Pays'
                InputLabelProps={{
                  className: classes.textFieldLabel
                }}
                variant='outlined'
                value={formData.country}
                onChange={(e) => {
                  setFormData({ ...formData, country: e.target.value });
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type='date'
                name='creationDate'
                InputLabelProps={{
                  className: classes.textFieldLabel,
                  shrink: true
                }}
                label='Date de Création'
                variant='outlined'
                value={formData.creationDate}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    creationDate: e.target.value
                  });
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='headline'
                label='Résumé'
                InputLabelProps={{
                  className: classes.textFieldLabel
                }}
                inputProps={{
                  maxlength: 200
                }}
                variant='outlined'
                value={formData.headline}
                onChange={(e) => {
                  setFormData({ ...formData, headline: e.target.value });
                }}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name='description'
                label='Description'
                InputLabelProps={{
                  className: classes.textFieldLabel
                }}
                variant='outlined'
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
                fullWidth
                multiline
                required
              />
            </Grid>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Modal>
  );
};

StartupForm.defaultProps = {
  editingStartupId: null
};

StartupForm.propTypes = {
  open: PropTypes.bool.isRequired,
  editingStartupId: PropTypes.number,
  handleClose: PropTypes.func.isRequired
};

export default StartupForm;
