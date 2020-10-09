import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import englishWiseApi from '../services/englishWiseApi';

const LoginPage = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = e => {
    if (e.target.id === 'email-input') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'password-input') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { userLogin } = props;
    dispatch(englishWiseApi.userLogin(email, password).then(user => {
      userLogin(user);
    }));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input id="email-input" type="text" value={email} onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password-input" type="password" value={password} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default LoginPage;
