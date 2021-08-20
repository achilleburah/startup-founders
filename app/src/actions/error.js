import { TOGGLE_ERROR_MESSAGE } from '../constants/actions';

export const toggleError = (message) => async (dispatch) => {
  dispatch({
    type: TOGGLE_ERROR_MESSAGE,
    payload: { message, showAlert: true }
  });
  setTimeout(() => {
    dispatch({
      type: TOGGLE_ERROR_MESSAGE,
      payload: { message, showAlert: false }
    });
  }, 3000);
};

export const showError = (message) => async (dispatch) => {
  dispatch({
    type: TOGGLE_ERROR_MESSAGE,
    payload: { message, showAlert: true }
  });
};
