import {
  CREATE_FOUNDER_SUCCESS,
  CREATE_STARTUP_SUCCESS,
  DELETE_STARTUP_SUCCESS,
  LOAD_STARTUPS_SUCCESS,
  UPDATE_STARTUP_SUCCESS
} from '../constants/actions';

const defaultState = {
  list: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_STARTUPS_SUCCESS:
      return {
        ...state,
        list: [...payload]
      };

    case CREATE_STARTUP_SUCCESS:
      return {
        ...state,
        list: [...state.list, payload]
      };

    case UPDATE_STARTUP_SUCCESS:
      return {
        ...state,
        list: state.list.map((startup) =>
          startup._id === payload._id ? payload : startup
        )
      };

    case DELETE_STARTUP_SUCCESS:
      return {
        ...state,
        list: state.list.filter((startup) => startup._id !== payload && startup)
      };

    case CREATE_FOUNDER_SUCCESS:
      return {
        ...state,
        list: state.list.map((startup) => {
          if (startup._id === payload.startupId) {
            startup.founders.push(payload.founder);
          }
          return startup;
        })
      };

    default:
      return state;
  }
};
