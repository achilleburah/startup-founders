import * as api from '../api'
import { LIST_STARTUPS } from '../constants/actions'

export const fetchStartupList = () => async dispatch => {
  try {
    const { data } = await api.fetchStartups()
    dispatch({ type: LIST_STARTUPS, payload: data })
  } catch (error) {
    console.error(error.message)
  }
}
