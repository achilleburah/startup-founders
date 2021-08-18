import * as api from '../api'
import { CREATE_STARTUP, LIST_STARTUPS } from '../constants/actions'

export const fetchStartupList = () => async dispatch => {
  try {
    const { data } = await api.fetchStartups()
    dispatch({ type: LIST_STARTUPS, payload: data })
  } catch (error) {
    console.error(error.message)
  }
}

export const createStartup = startup => async dispatch => {
  try {
    const res = await api.createStartup(startup)
    console.log('Create Results: ', res)
    dispatch({ type: CREATE_STARTUP, payload: startup })
  } catch (error) {
    console.error(error.message)
  }
}
