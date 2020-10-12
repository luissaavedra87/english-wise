const baseUrl = 'https://nriqu322-english-wise-netlify.net';
const baseUrl = 'localhost:3001'

const englishWiseApi = () => {
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
    } catch (e) {
      return {
        error: e.message,
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
    } catch (e) {
      return {
        error: e.message,
      };
    }
  };

  return { userLogin, userSignup };
};

export default englishWiseApi;
