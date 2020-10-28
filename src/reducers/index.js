import { combineReducers } from 'redux';
import userReducer from './user';
import teacherReducer from './teachers';
import flashMessages from './flashMessages';
import appoinmentReducer from './appoinment';

const rootReducer = combineReducers({
  user: userReducer,
  teachers: teacherReducer,
  appoinment: appoinmentReducer,
  flashMessages,
});

export default rootReducer;
