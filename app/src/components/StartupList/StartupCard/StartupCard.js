import { Box, Typography } from '@material-ui/core'
import useStyles from './styles'

export const StartupCard = ({ startup }) => {
  const classes = useStyles()
  return (
    <Box>
      <Box
        display='flex'
        alignItem='flex-start'
        flexDirection='row'
        mb={5}
        bgcolor='error.main'
      >
        <Typography className={classes.headingItem}>{startup.name}</Typography>
        <Typography className={classes.headingItem}>{'|'}</Typography>
        <Typography className={classes.headingItem}> {startup.city}</Typography>
        <Typography className={classes.headingItem}>{', '}</Typography>
        <Typography className={classes.headingItem}>{startup.state}</Typography>
      </Box>
      <Typography>{startup.description}</Typography>
    </Box>
  )
}
