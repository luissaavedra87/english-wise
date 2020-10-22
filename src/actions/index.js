const USER_LOGIN = 'USER_LOGIN';
const LOGOUT = 'LOGOUT';
const NEW_USER = 'NEW_USER';
const SESSION = 'SESSION';
const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

const newUser = user => ({
  type: NEW_USER,
  user,
});

const userLogin = user => ({
  type: USER_LOGIN,
  user,
});

const userLogout = () => ({
  type: LOGOUT,
});

const sessionUser = user => ({
  type: SESSION,
  user,
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
  newUser, userLogin, userLogout, sessionUser, addFlashMessage, deleteFlashMessage,
  USER_LOGIN, LOGOUT, SESSION, NEW_USER, ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE,
};
