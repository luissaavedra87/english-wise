import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { addFlashMessage } from '../actions';

const SignupPage = props => {
  const { addFlashMessage } = props;
  return (
    <div className="signup">
      <h1>Signup</h1>
      <SignupForm addFlashMessage={addFlashMessage} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addFlashMessage: message => {
    dispatch(addFlashMessage(message));
  },
});

SignupPage.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  // userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignupPage);
