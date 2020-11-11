import { combineReducers } from 'redux';
import userReducer from './user';
import teacherReducer from './teachers';
import appoinmentReducer from './appoinments';

const rootReducer = combineReducers({
  user: userReducer,
  teachers: teacherReducer,
  appoinments: appoinmentReducer,
});

export default rootReducer;
