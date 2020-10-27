import { SET_TEACHERS, SET_CURRENT_TEACHER } from '../actions/index';

const initialState = {
  teachers: [],
  currentTeacher: null,
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEACHERS:
      return {
        ...state,
        teachers: action.teachers,
      };
    case SET_CURRENT_TEACHER:
      return {
        ...state,
        currentTeacher: action.currentTeacher,
      };
    default:
      return state;
  }
};

export default teacherReducer;
