const baseUrl = 'https://nriqu322-english-wise-netlify.net';

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
      const response = await fetch(`${baseUrl}/users/login`, config);
      const data = await response.json();
      return data.results;
    } catch (e) {
      return {
        error: e.message,
      };
    }
  };

  return userLogin;
};

export default englishWiseApi;
