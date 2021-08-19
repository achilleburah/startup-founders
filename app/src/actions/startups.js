import * as api from '../api';
import {
  CREATE_STARTUP_SUCCESS,
  DELETE_STARTUP_SUCCESS,
  LOAD_STARTUPS_SUCCESS,
  UPDATE_STARTUP_SUCCESS
} from '../constants/actions';

export const fetchStartupList = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStartups();
    /// TODO : dispatch based on api response

    dispatch({ type: LOAD_STARTUPS_SUCCESS, payload: data });
  } catch (error) {
    console.error('[actions:fetchStartupList]', error);
  }
};

export const createStartup = (startup) => async (dispatch) => {
  try {
    const res = await api.createStartup(startup);
    /// TODO : dispatch based on api response
    console.log('created ? ', res.data);

    dispatch({
      type: CREATE_STARTUP_SUCCESS,
      payload: res.data.createdStartup
    });
  } catch (error) {
    console.error('[actions:createStartup]', error);
  }
};

export const updateStartup = (selectedId, startup) => async (dispatch) => {
  try {
    const res = await api.updateStartup(selectedId, startup);
    /// TODO : dispatch based on api response
    dispatch({
      type: UPDATE_STARTUP_SUCCESS,
      payload: res.data.updatedStartup
    });
  } catch (error) {
    console.error('[actions:updateStartup]', error);
  }
};

export const deleteStartup = (startupId) => async (dispatch) => {
  try {
    const res = await api.deleteStartup(startupId);
    /// TODO : dispatch based on api response
    dispatch({ type: DELETE_STARTUP_SUCCESS, payload: startupId });
  } catch (error) {
    console.error('[actions:updateStartup]', error);
  }
};
