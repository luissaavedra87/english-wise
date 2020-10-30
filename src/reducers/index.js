import { combineReducers } from 'redux';
import userReducer from './user';
import teacherReducer from './teachers';
import flashMessages from './flashMessages';
import appoinmentReducer from './appoinments';

const rootReducer = combineReducers({
  user: userReducer,
  teachers: teacherReducer,
  appoinments: appoinmentReducer,
  flashMessages,
});

export default rootReducer;
