import { SET_NEW_APPOINMENT } from '../actions/index';

const appoinmentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_NEW_APPOINMENT:
      return {
        ...state,
        appoinment: action.appoinment,
      };
    default:
      return state;
  }
};

export default appoinmentReducer;
