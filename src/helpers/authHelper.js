import { autoLogin } from '../services/englishWiseApi';

const USER_TOKEN = 'userToken';

const setToken = token => {
  localStorage.setItem(USER_TOKEN, token);
};

const getToken = () => (localStorage.getItem(USER_TOKEN));

const deleteToken = () => (localStorage.removeItem(USER_TOKEN));

const validSession = (user, setUser) => {
  let loggedIn = true;
  if (Object.keys(user).length === 0) {
    const userToken = localStorage.getItem('userToken');
    if (userToken && userToken !== undefined && userToken !== 'undefined') {
      autoLogin(userToken).then(data => {
        setToken(userToken);
        setUser(data);
      });
      loggedIn = true;
    } else {
      loggedIn = false;
      deleteToken();
    }
  }
  return loggedIn;
};

export {
  setToken, getToken, deleteToken, validSession,
};
