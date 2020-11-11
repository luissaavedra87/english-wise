import React from 'react';
import SignupForm from '../components/SignupForm';
import logo from '../resources/english-logo.png';

const SignupPage = () => (
  <div className="signup text-center bg-light">
    <img src={logo} alt="logo" className="mt-4" />
    <h2 className="my-3">Signup</h2>
    <div className="row d-flex">
      <div className="col-4 col-offset-4 mx-auto">
        <SignupForm />
      </div>
    </div>

  </div>
);

export default SignupPage;
