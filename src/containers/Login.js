import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

const Login = props => {
  const { setUser } = props;

  return (
    <div className="login text-center">
      <h1>Login</h1>
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
