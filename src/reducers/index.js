import { combineReducers } from 'redux';
import userReducer from './user';
import teacherReducer from './teachers';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  user: userReducer,
  teachers: teacherReducer,
  flashMessages,
});

export default rootReducer;
