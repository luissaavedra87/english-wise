const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const AUTO_LOGIN = 'AUTO_LOGIN';
const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

const setUser = user => ({
  type: SET_USER,
  user,
});

const userLogout = () => ({
  type: LOGOUT,
});

// const autoLogin = user => ({
//   type: AUTO_LOGIN,
//   user,
// });

const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  message,
});

const deleteFlashMessage = message => ({
  type: DELETE_FLASH_MESSAGE,
  id: message.id,
});

export {
  setUser, userLogout, addFlashMessage, deleteFlashMessage,
  SET_USER, LOGOUT, AUTO_LOGIN, ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE,
};
