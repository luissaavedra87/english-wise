// import englishWiseApi from '../services/englishWiseApi';
import { userSession } from '../services/englishWiseApi';

const USER_TOKEN = 'userToken';

const setToken = token => {
  localStorage.setItem(USER_TOKEN, token);
};

const getToken = () => (localStorage.getItem(USER_TOKEN));

const deleteToken = () => (localStorage.removeItem(USER_TOKEN));

const validSession = (user, userLogin) => {
  let loggedIn = false;
  if (Object.keys(user).length === 0) {
    const user = getToken();

    if (user && user !== undefined && user !== 'undefined') {
      userSession(user.token).then(data => {
        setToken(data.token);
        userLogin(data);
      });
      loggedIn = true;
    }
  }
  return loggedIn;
};

export {
  setToken, getToken, deleteToken, validSession,
};
