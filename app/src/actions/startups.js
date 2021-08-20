import * as api from '../api';
import {
  CREATE_STARTUP_SUCCESS,
  DELETE_STARTUP_SUCCESS,
  LOAD_STARTUPS_SUCCESS,
  UPDATE_STARTUP_SUCCESS
} from '../constants/actions';

import { toggleError } from './error';

export const fetchStartupList = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStartups();
    dispatch({ type: LOAD_STARTUPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch(toggleError(error.message));
  }
};

export const createStartup = (startup) => async (dispatch) => {
  try {
    const res = await api.createStartup(startup);
    dispatch({
      type: CREATE_STARTUP_SUCCESS,
      payload: res.data.createdStartup
    });
  } catch (error) {
    dispatch(toggleError(error.message));
  }
};

export const updateStartup = (selectedId, startup) => async (dispatch) => {
  try {
    const { data } = await api.updateStartup(selectedId, startup);
    console.log('UPDATED STARTUP ', data.updatedStartup);
    dispatch({
      type: UPDATE_STARTUP_SUCCESS,
      payload: data.updatedStartup
    });
  } catch (error) {
    dispatch(toggleError(error.message));
  }
};

export const deleteStartup = (startupId) => async (dispatch) => {
  try {
    await api.deleteStartup(startupId);
    dispatch({ type: DELETE_STARTUP_SUCCESS, payload: startupId });
  } catch (error) {
    dispatch(toggleError(error.message));
  }
};
