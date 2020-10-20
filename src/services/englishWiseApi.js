// const baseUrl = 'https://nriqu322-english-wise-netlify.net';
const baseUrl = 'http://localhost:3001';

// const englishWiseApi = () => {
const userLogin = async props => {
  const { email, password } = props;
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email, password),
  };
  try {
    const response = await fetch(`${baseUrl}/login`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const userSignup = async user => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(`${baseUrl}/signup`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const userSession = async token => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${baseUrl}/session`, config);
  const data = await response.json();
  return data;
};

//   return { userLogin, userSignup, userSession };
// };

export { userLogin, userSignup, userSession };
// export default englishWiseApi;
