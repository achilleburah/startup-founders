import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  colors,
  Modal,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
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

  // const date = new Date(startup.creationDate).toLocaleDateString();

  useEffect(() => {
    console.log('Startup Change', startup);
  }, [startup]);

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
              <Typography variant='h6' className={classes.title}>
                Êtes-vous sûrs de vouloir supprimer cette startup ?
              </Typography>
              <Typography variant='caption'>
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
        <Box display='flex' alignItems='flex-start' flexDirection='row'>
          <Typography variant='h6' component='h3' className={classes.title}>
            {startup.name}
          </Typography>
          {startup.city && (
            <Typography variant='h6'>{'| ' + startup.city}</Typography>
          )}
          {startup.country && (
            <Typography variant='h6'>{', ' + startup.country}</Typography>
          )}
          {startup.creationDate && (
            <Typography variant='h6'>{', ' + startup.creationDate}</Typography>
          )}
        </Box>
        <Typography variant='body1'>{startup.headline}</Typography>
      </CardContent>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          <Typography variant='subtitle2'>
            Description de l&apos;entreprise
          </Typography>
          <Typography variant='body2'>{startup.description}</Typography>
          {startup.founders.length > 0 ? (
            <Box display='flex'>
              <Typography variant='subtitle2'> Fondateurs</Typography>
              {startup.founders.map((founder) => (
                <FounderCard key={founder._id} founder={founder} />
              ))}
            </Box>
          ) : (
            <Box display='flex'>
              <Typography variant='subtitle2'>
                Pas d&apos;information sur les fondateurs
              </Typography>
            </Box>
          )}

          <Button
            size='small'
            variant='outlined'
            color='primary'
            onClick={() => handleAddFounder(startup._id)}
          >
            Ajouter un fondateur
          </Button>
        </CardContent>
      </Collapse>

      <CardActions>
        <Button
          size='medium'
          variant='outlined'
          color='primary'
          onClick={handleExpandClick}
        >
          Plus d`&apos;infos
        </Button>
        <Button
          size='medium'
          variant='outlined'
          color='primary'
          onClick={() => handleEdit(startup._id)}
        >
          Modifier la Startup
        </Button>
        <Button
          size='medium'
          variant='outlined'
          color='secondary'
          onClick={() => setShowConfirmationModal(true)}
        >
          Supprimer la Startup
        </Button>
      </CardActions>
    </Card>
  );
};
