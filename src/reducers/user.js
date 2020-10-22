import { USER_LOGIN, LOGOUT } from '../actions/index';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.user.user };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
