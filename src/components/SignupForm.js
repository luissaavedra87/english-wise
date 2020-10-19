import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userSignup } from '../services/englishWiseApi';
import { setToken } from '../helpers/authHelper';
// import englishWiseApi from '../services/englishWiseApi';

const SignupForm = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();

  const history = useHistory();

  const handleChange = e => {
    if (e.target.id === 'username-input') {
      setUsername(e.target.value);
    }
    if (e.target.id === 'email-input') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'password-input') {
      setPassword(e.target.value);
    }
    if (e.target.id === 'password-conf-input') {
      setPasswordConf(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      password_confirmation: passwordConf,
    };

    userSignup(newUser)
      .then(data => {
        // const { userLogin } = props;
        // userLogin(data);
        setToken(data.token);
        if (data.token) {
          console.log(data);
          console.log(data.user);
          history.push('/login');
        }
      })
      .catch(error => {
        console.log('signup error', error);
        history.push('/signup');
      });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input id="username-input" name="username" type="text" onChange={handleChange} required />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email-input" name="email" type="text" onChange={handleChange} required />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password-input" name="password" type="password" onChange={handleChange} required />
      </label>
      <label htmlFor="password-conf">
        Password Confirmation:
        <input id="password-conf-input" name="passwordConf" type="password" onChange={handleChange} required />
      </label>
      <input type="submit" value="SignUp" />
    </form>
  );
};

export default SignupForm;
