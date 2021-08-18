import { CREATE_STARTUP, LIST_STARTUPS } from '../constants/actions'

const defaultState = {
  selected: null,
  list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case LIST_STARTUPS:
      return {
        ...state,
        list: [...payload]
      }

    case CREATE_STARTUP:
      return state

    default:
      return state
  }
}
