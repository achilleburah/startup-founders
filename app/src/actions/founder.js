import * as api from '../api';
import { CREATE_FOUNDER_SUCCESS } from '../constants/actions';
import { toggleError } from './error';

// eslint-disable-next-line import/prefer-default-export
export const createFounder = (startupId, founder) => async (dispatch) => {
  try {
    await api.createFounder(startupId, founder);
    dispatch({
      type: CREATE_FOUNDER_SUCCESS,
      payload: { founder, startupId }
    });
  } catch (error) {
    dispatch(toggleError(error.message));
  }
};
