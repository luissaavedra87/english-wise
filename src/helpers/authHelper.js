const TOKEN_KEY = 'token';

const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => (localStorage.getItem(TOKEN_KEY));

const deleteToken = () => (localStorage.removeItem(TOKEN_KEY));

const validLogin = () => {
  
}

export { setToken, getToken, deleteToken };
