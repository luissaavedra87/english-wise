const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const SET_TEACHERS = 'SET_TEACHERS';
const SET_CURRENT_TEACHER = 'SET_CURRENT_TEACHER';
// const SET_NEW_APPOINMENT = 'SET_NEW_APPOINMENT';
const GET_APPOINMENTS = 'GET_APPOINMENTS';
const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

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

// const setNewAppoinment = appoinment => ({
//   type: SET_NEW_APPOINMENT,
//   appoinment,
// });

const getAppoinments = appoinments => ({
  type: GET_APPOINMENTS,
  appoinments,
});

const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  message,
});

const deleteFlashMessage = message => ({
  type: DELETE_FLASH_MESSAGE,
  id: message.id,
});

export {
  setUser, userLogout, setTeachers, setCurrentTeacher, getAppoinments,
  // setNewAppoinment,
  addFlashMessage, deleteFlashMessage,
  SET_USER, LOGOUT, SET_TEACHERS, SET_CURRENT_TEACHER, GET_APPOINMENTS,
  // SET_NEW_APPOINMENT,
  ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE,
};
