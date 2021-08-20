import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

const FounderCard = ({ founder }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography className={classes.cardItem} variant='subtitle2'>
            {founder.firstName + ' '}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.cardItem} variant='subtitle2'>
            {founder.lastName + ', '}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.cardItem} variant='caption'>
            {founder.jobTitle}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

FounderCard.propTypes = {
  founder: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string
  }).isRequired
};

export default FounderCard;
