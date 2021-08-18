import { useDispatch } from 'react-redux'
import { Box, Container, Typography } from '@material-ui/core'

import './App.css'
import { StartupList } from './components/StartupList/StartupList.js'
import { useEffect } from 'react'
import { fetchStartupList } from './actions/startups'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStartupList())
  }, [dispatch])

  return (
    <Container>
      <Box mb={5}>
        <Typography variant='h1' align='center' mb={20}>
          Startup Founders
        </Typography>
      </Box>

      <StartupList />
    </Container>
  )
}

export default App