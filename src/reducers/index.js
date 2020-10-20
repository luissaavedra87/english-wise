import { combineReducers } from 'redux';
import userReducer from './user';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  user: userReducer,
  flashMessages,
});

export default rootReducer;
