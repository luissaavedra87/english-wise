import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { userLogin } from '../services/englishWiseApi';
import { setToken } from '../helpers/authHelper';

toast.configure();
const LoginForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

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
    const user = {
      email,
      password,
    };

    userLogin(user)
      .then(data => {
        const { setUser } = props;
        if (data.token) {
          setToken(data.token);
          setUser(data.user);
          history.push('/');
          toast.success('Successful Login');
        } else {
          toast.warn('Wrong email or password');
        }
      });

  };

  return (
    <>
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
        <div>
          Create a new Account:
          {' '}
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
