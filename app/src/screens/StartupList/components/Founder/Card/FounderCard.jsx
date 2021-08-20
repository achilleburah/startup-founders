import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

const FounderCard = ({ founder }) => {
  const classes = useStyles();
  return (
    <Card variant='contained' className={classes.card}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography className={classes.cardItem} variant='subtitle2'>
            {founder.firstName + ' '}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.cardItem} variant='subtitle2'>
            {founder.lastName + ', '}
          </Typography>{' '}
        </Grid>
        <Grid item>
          <Typography className={classes.cardItem} variant='caption'>
            {founder.jobTitle}
          </Typography>{' '}
        </Grid>
      </Grid>
    </Card>
  );
};

FounderCard.propTypes = {
  founder: {
    firstName: String,
    lastName: String,
    jobTitle: String
  }.isRequired
};

export default FounderCard;