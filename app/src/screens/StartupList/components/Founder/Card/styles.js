import { colors, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    marginBottom: theme.spacing(2)
  },
  cardItem: {
    flex: 1
  }
}));
