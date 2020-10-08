import React, { useState } from 'react';
import useDispatch from 'react-redux';

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

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await
  // };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input id="email-input" type="text" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password-input" type="password" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
