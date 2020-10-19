const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const NEW_USER = 'NEW_USER';
const SESSION = 'SESSION';

const newUser = user => ({
  type: NEW_USER,
  user,
});

const userLogin = user => ({
  type: LOGIN,
  user,
});

const userLogout = () => ({
  type: LOGOUT,
});

const sessionUser = user => ({
  type: SESSION,
  user,
});

export {
  newUser, userLogin, userLogout, sessionUser,
  LOGIN, LOGOUT, SESSION, NEW_USER,
};
