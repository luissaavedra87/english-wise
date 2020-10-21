import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import englishWiseApi from '../services/englishWiseApi';
import { userLogin } from '../services/englishWiseApi';
import { setToken } from '../helpers/authHelper';
import LoginForm from '../components/LoginForm';

const Login = props => {
  // const dispatch = useDispatch();
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
    userLogin(email, password).then(data => {
      console.log(data.user);
      const { userLogin } = props;
      userLogin(data.user);
      setToken(data.user);
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="row">
        <div className="col-4 col-offset-4 mx-auto">
          <LoginForm />
        </div>
        <form className="login-form " onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input id="email-input" type="text" onChange={handleChange} required />
          </label>
          <label htmlFor="password">
            Password:
            <input id="password-input" type="password" onChange={handleChange} required />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default Login;
