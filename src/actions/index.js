const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const NEW_USER = 'NEW_USER';
const SESSION = 'SESSION';

const newUser = user => ({
  type: NEW_USER,
  user,
});

const login = user => ({
  type: LOGIN,
  user,
});

const logout = () => ({
  type: LOGOUT,
});

const sessionUser = user => ({
  type: SESSION,
  user,
});

export {
  newUser, login, logout, sessionUser,
  LOGIN, LOGOUT, SESSION, NEW_USER,
};
