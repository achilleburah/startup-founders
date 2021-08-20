import { combineReducers } from 'redux';

import startups from './startups';
import error from './error';

export default combineReducers({ startups, error });
