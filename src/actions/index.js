const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const SET_TEACHERS = 'SET_TEACHERS';
const SET_CURRENT_TEACHER = 'SET_CURRENT_TEACHER';
const GET_APPOINMENTS = 'GET_APPOINMENTS';

const setUser = user => ({
  type: SET_USER,
  user,
});

const userLogout = () => ({
  type: LOGOUT,
});

const setTeachers = teachers => ({
  type: SET_TEACHERS,
  teachers,
});

const setCurrentTeacher = currentTeacher => ({
  type: SET_CURRENT_TEACHER,
  currentTeacher,
});

const getAppoinments = appoinments => ({
  type: GET_APPOINMENTS,
  appoinments,
});

export {
  setUser, userLogout, setTeachers, setCurrentTeacher, getAppoinments,
  SET_USER, LOGOUT, SET_TEACHERS, SET_CURRENT_TEACHER, GET_APPOINMENTS,
};
