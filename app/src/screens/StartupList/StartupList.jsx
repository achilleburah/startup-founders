import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
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

  useEffect(() => {
    console.log('Startups:', startups);
  }, [startups]);

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
          variant='contained'
          size='large'
          color='primary'
          onClick={() => setShowStartupFormModal(true)}
        >
          Ajouter une nouvelle entreprise
        </Button>
      </Box>

      {startups.length > 0 ? (
        <Box className={classes.startupListContainer}>
          {startups.map((startup) => (
            <StartupCard
              key={startup._id}
              startupId={startup._id}
              handleEdit={handleEdit}
              handleAddFounder={handleAddFounder}
            />
          ))}
        </Box>
      ) : (
        <CircularProgress />
      )}

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
    </Box>
  );
};
