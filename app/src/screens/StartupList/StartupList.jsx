import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  Grid,
  Hidden,
  Typography
} from '@material-ui/core';
import { useSelector } from 'react-redux';

import { StartupForm, FounderForm, StartupCard } from './components';

import useStyles from './styles';

export default () => {
  const startups = useSelector((state) => state.startups.list);
  const [showStartupFormModal, setShowStartupFormModal] = useState(false);
  const [showFounderFormModal, setShowFounderFormModal] = useState(false);
  const [editingStartupId, setEditingStartupId] = useState(null);

  const classes = useStyles();

  const handleEdit = (id) => {
    setEditingStartupId(id);
    setShowStartupFormModal(true);
  };

  const handleAddFounder = (id) => {
    setEditingStartupId(id);
    setShowFounderFormModal(true);
  };

  return (
    <Grid container justifyContent='space-between' alignItems='stretch'>
      <Grid
        container
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        className={classes.headingContainer}
        spacing={2}
      >
        <Hidden only='xs'>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' component='h2' color='textSecondary'>
              Startup List
            </Typography>
          </Grid>
        </Hidden>

        <Grid container item xs={12} sm={6} justifyContent='flex-end'>
          <Button
            variant='contained'
            size='large'
            color='secondary'
            onClick={() => setShowStartupFormModal(true)}
          >
            Ajouter une nouvelle entreprise
          </Button>
        </Grid>
      </Grid>

      <Grid container alignItems='stretch' spacing={3}>
        {startups.length > 0 ? (
          startups.map((startup) => (
            <Grid item key={startup._id} xs={12} md={6}>
              <StartupCard
                startupId={startup._id}
                handleEdit={handleEdit}
                handleAddFounder={handleAddFounder}
              />
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>

      <StartupForm
        open={showStartupFormModal}
        editingStartupId={editingStartupId}
        handleClose={() => {
          setShowStartupFormModal(false);
          setEditingStartupId(null);
        }}
      />
      <FounderForm
        open={showFounderFormModal}
        editingStartupId={editingStartupId}
        handleClose={() => {
          setShowFounderFormModal(false);
          setEditingStartupId(null);
        }}
      />
    </Grid>
  );
};
