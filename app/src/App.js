import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Container,
  createTheme,
  Grow,
  Hidden,
  ThemeProvider,
  Typography
} from '@material-ui/core';

import { Alert, AlertTitle } from '@material-ui/lab';

import useStyle from './styles';
import StartupList from './screens/StartupList/StartupList';
import { fetchStartupList } from './actions/startups';
import rocket from './assets/rocket.png';

const theme = createTheme({
  palette: {
    primary: {
      light: '#001133',
      main: '#00246C',
      dark: '#001133'
    },
    secondary: { main: '#fefefe' },
    text: {
      primary: '#00246C',
      secondary: '#FFFFFF'
    },
    error: {
      main: '#FF0000'
    }
  }
});

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchStartupList());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg' className={classes.rootContainer}>
        {error.showAlert && (
          <Alert severity='error' className={classes.errorAlert}>
            <AlertTitle>Error</AlertTitle>
            {error.message}
          </Alert>
        )}

        <AppBar className={classes.appBar} position='static'>
          <Typography
            className={classes.heading}
            variant='h2'
            align='center'
            color={theme.textSecondary}
          >
            STARTUP FOUNDERS
          </Typography>
          <Hidden only='xs'>
            <Box className={classes.logoContainer}>
              <img
                className={classes.image}
                src={rocket}
                alt='icon'
                height='60'
              />
            </Box>
          </Hidden>
        </AppBar>

        <Grow in>
          <Container>
            <StartupList />
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
