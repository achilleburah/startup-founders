import * as api from '../api'
import {
  CREATE_STARTUP_SUCCESS,
  LOAD_STARTUPS_SUCCESS,
  UPDATE_STARTUP_SUCCESS
} from '../constants/actions'

export const fetchStartupList = () => async dispatch => {
  try {
    const { data } = await api.fetchStartups()
    dispatch({ type: LOAD_STARTUPS_SUCCESS, payload: data })
  } catch (error) {
    console.error('[actions:fetchStartupList]', error)
  }
}

export const createStartup = startup => async dispatch => {
  try {
    const res = await api.createStartup(startup)
    console.log('Create Results: ', res)
    dispatch({ type: CREATE_STARTUP_SUCCESS, payload: startup })
  } catch (error) {
    console.error('[actions:createStartup]', error)
  }
}

export const updateStartup = (selectedId, startup) => async dispatch => {
  try {
    const res = await api.updateStartup(selectedId, startup)
    console.log('Update Results: ', res)
    dispatch({ type: UPDATE_STARTUP_SUCCESS, payload: startup })
  } catch (error) {
    console.error('[actions:updateStartup]', error)
  }
}
