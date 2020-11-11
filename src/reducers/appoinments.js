import { GET_APPOINMENTS } from '../actions/index';

const appoinmentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_APPOINMENTS:
      return {
        ...state,
        appoinments: action.appoinments,
      };
    default:
      return state;
  }
};

export default appoinmentReducer;
