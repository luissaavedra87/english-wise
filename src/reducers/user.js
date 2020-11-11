import { SET_USER, LOGOUT } from '../actions/index';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
