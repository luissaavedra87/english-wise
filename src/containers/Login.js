import React from 'react';
// import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

const Login = () => (
  <div className="login text-center">
    <h1>Login</h1>
    <div className="row">
      <div className="col-4 col-offset-4 mx-auto">
        <LoginForm />
      </div>
    </div>
  </div>
);

// Login.propTypes = {
//   userLogin: PropTypes.func.isRequired,
// };

export default Login;
