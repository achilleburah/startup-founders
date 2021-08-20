import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  confirmationModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    marginBottom: theme.spacing(2),
    minHeight: 200
  },
  headingItem: {
    marginRight: 10
  },
  expand: {
    backgroundColor: '#ffffff',
    color: '#000000',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  }
}));
