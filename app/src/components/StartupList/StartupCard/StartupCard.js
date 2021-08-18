import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography
} from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles'

export const StartupCard = ({ startup }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card className={classes.container} variant='outlined'>
      <CardContent>
        <Box display='flex' alignItems='flex-start' flexDirection='row'>
          <Typography variant='h6' component='h3' className={classes.title}>
            {startup.name}
          </Typography>
          {startup.city && (
            <Typography variant='h6'>{' | ' + startup.city}</Typography>
          )}
          {startup.country && (
            <Typography variant='h6' className={classes.headingItem}>
              {', ' + startup.country}
            </Typography>
          )}
          {startup.creationDate && (
            <Typography>{', ' + startup.creationDate}</Typography>
          )}
        </Box>
        <Typography variant='body1'>{startup.headline}</Typography>
      </CardContent>
      <Collapse in={expanded} unmountOnExit>
        <CardContent>
          <Typography variant='body2'>{startup.description}</Typography>
        </CardContent>
      </Collapse>

      <CardActions>
        <Button size='small' onClick={handleExpandClick}>
          Plus d'infos
        </Button>
      </CardActions>
    </Card>
  )
}
