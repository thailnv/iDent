import { combineReducers } from 'redux';

import { authentication } from './authReducers';
import { application } from './appReducers'

const rootReducer = combineReducers({
  authentication,
  application
});

export default rootReducer;