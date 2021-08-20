import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    horizontalPadding: theme.spacing(20)
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    borderRadius: 25
  },
  formTitle: { padding: theme.spacing(2) },
  inputField: {
    display: 'flex',
    flex: 1,
    padding: theme.spacing(2)
  },
  textFieldLabel: {
    color: '#001133'
  }
}));
