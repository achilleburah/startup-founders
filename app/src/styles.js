import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  alertContainer: { backgroundColor: '#000000' },
  errorAlert: {
    position: 'absolute',
    top: 0,
    zIndex: 2
  },
  rootContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw'
  },
  appBar: {
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: theme.spacing(2),
    marginLeft: theme.spacing(5)
  }
}));
