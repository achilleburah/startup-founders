import { Card, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

export default ({ founder }) => {
  const classes = useStyles();
  return (
    <Card variant='outlined' className={classes.card}>
      <Typography className={classes.cardItem}>
        {`${founder.firstName} ${founder.lastName} : ${founder.jobTitle}`}
      </Typography>
    </Card>
  );
};
