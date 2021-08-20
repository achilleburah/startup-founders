import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clxs from 'clsx';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  colors,
  Divider,
  Grid,
  IconButton,
  Modal,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { deleteStartup } from '../../../../../actions/startups';
import useStyles from './styles';
import FounderCard from '../../Founder/Card/FounderCard';

export default ({ startupId, handleEdit, handleAddFounder }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const startup = useSelector((state) =>
    state.startups.list.find((s) => s._id === startupId)
  );

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    dispatch(deleteStartup(startup._id));
    setShowConfirmationModal(false);
  };

  const date = new Date(startup.creationDate).toLocaleDateString();

  return (
    <Card className={classes.container} variant='outlined'>
      <Modal
        open={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        className={classes.confirmationModal}
      >
        <Box>
          <Card>
            <CardContent color={colors.grey}>
              <Typography
                variant='h6'
                className={classes.title}
                color='textPrimary'
              >
                Êtes-vous sûrs de vouloir supprimer cette startup ?
              </Typography>
              <Typography variant='caption' color='textPrimary'>
                Une fois effectuée, cette action est irréversible.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                variant='outlined'
                color='secondary'
                onClick={() => handleDelete(startup._id)}
              >
                Oui, je suis sûr.
              </Button>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                onClick={() => setShowConfirmationModal(false)}
              >
                J`&apos;ai changé d`&apos;avis.
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
      <CardContent>
        <Typography variant='h5' component='h3' color='textPrimary'>
          {startup.name}
        </Typography>
        <Box display='flex' flexDirection='row' alignItems='flex-start'>
          {startup.city && (
            <Typography variant='caption' color='textPrimary'>
              {startup.city}
            </Typography>
          )}
          {startup.country && (
            <Typography variant='caption' color='textPrimary'>
              {', ' + startup.country}
            </Typography>
          )}
          {startup.creationDate && (
            <Typography variant='caption' color='textPrimary'>
              {', ' + date}
            </Typography>
          )}
        </Box>
        <Typography variant='body1'>{startup.headline}</Typography>
      </CardContent>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          <Typography variant='body1'>{startup.description}</Typography>
          <Divider className={classes.divider} />
          <Grid item xs={12} className={classes.foundersContainer}>
            <Grid container alignItems='center' justifyContent='center'>
              <Grid item xs={10}>
                <Typography variant='subtitle1'>
                  {startup.founders.length > 0
                    ? 'Fondateurs'
                    : `Pas d'information sur les fondateurs`}
                </Typography>
              </Grid>
              <Grid Grid item xs={2}>
                <IconButton
                  className={clxs(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  color='primary'
                  onClick={() => handleAddFounder(startup._id)}
                >
                  <AddCircleIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {startup.founders.map((founder) => (
                <Grid key={startup._id} item xs={12} sm={6} md={6}>
                  <FounderCard key={founder._id} founder={founder} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>

      <CardActions>
        <IconButton
          className={clxs(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          color='primary'
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>

        <IconButton
          // className={classes.edit}
          color='primary'
          onClick={() => handleEdit(startup._id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color='error'
          onClick={() => setShowConfirmationModal(true)}
        >
          <DeleteIcon color='error' />
        </IconButton>
        {/* <Button
          size='medium'
          variant='outlined'
          color='secondary'
          onClick={() => setShowConfirmationModal(true)}
        >
          Supprimer la Startup
        </Button> */}
      </CardActions>
    </Card>
  );
};
