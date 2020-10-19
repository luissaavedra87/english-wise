import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from '../components/SignupForm';

const SignupPage = props => {
  return (
    <div className="signup">
      <h1>Signup</h1>
      <SignupForm />
    </div>
  );
};

// SignupPage.propTypes = {
//   userLogin: PropTypes.func.isRequired,
// };

export default SignupPage;
