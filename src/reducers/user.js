import { LOGIN, LOGOUT } from '../actions/index';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.user };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
