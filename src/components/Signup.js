import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import englishWiseApi from '../services/englishWiseApi';

const SignupPage = props => {
  const dispatch = useDispatch();
  // const [newUser, setNewUser] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   passwordConf: '',
  // });
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();

  const handleChange = e => {
    // setNewUser({ ...newUser, [e.target.name]: e.target.value });
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
      passwordConf,
    };
    const { userLogin } = props;
    dispatch(englishWiseApi.userSignup(newUser).then(user => {
      userLogin(user);
    }));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input id="username-input" name="username" type="text" value={username} onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input id="email-input" name="email" type="text" value={email} onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password-input" name="password-input" type="password" value={password} onChange={handleChange} />
        </label>
        <label htmlFor="password-conf">
          Password Confirmation:
          <input id="password-conf-input" name="password-conf-input" type="password" value={passwordConf} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

SignupPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default SignupPage;
