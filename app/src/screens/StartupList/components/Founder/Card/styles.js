import { colors, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: colors.blue,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));
