import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { toast } from 'react-toastify';
import { userSignup } from '../services/englishWiseApi';
import { setToken } from '../helpers/authHelper';
import { setUser } from '../actions/index';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

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
        if (data.token && data.token !== undefined) {
          setToken(data.token);
          dispatch(setUser(data.user));
          history.push('/');
          toast.success('Successful Signup');
        } else {
          toast.warn('Unable to create user');
        }
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
      <div>
        Already have an Account?
        {' '}
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SignupForm);
