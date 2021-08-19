import * as api from '../api';
import { CREATE_FOUNDER_SUCCESS } from '../constants/actions';

// eslint-disable-next-line import/prefer-default-export
export const createFounder = (startupId, founder) => async (dispatch) => {
  try {
    const res = await api.createFounder(startupId, founder);
    dispatch({
      type: CREATE_FOUNDER_SUCCESS,
      payload: { founder, startupId }
    });
  } catch (error) {
    console.error('[actions:createFounder]', error);
  }
};
