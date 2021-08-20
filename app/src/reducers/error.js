import { TOGGLE_ERROR_MESSAGE } from '../constants/actions';

const defaultState = {
  message: '',
  showAlert: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_ERROR_MESSAGE:
      return {
        ...state,
        message: payload.message,
        showAlert: payload.showAlert
      };

    default:
      return state;
  }
};
