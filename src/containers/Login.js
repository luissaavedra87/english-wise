import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import logo from '../resources/english-logo.png';

const Login = props => {
  const { setUser } = props;

  return (
    <div className="login text-center bg-light">
      <img src={logo} alt="logo" className="mt-4" />
      <h2 className="my-3">Login</h2>
      <div className="row">
        <div className="col-4 col-offset-4 mx-auto">
          <LoginForm setUser={setUser} />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
