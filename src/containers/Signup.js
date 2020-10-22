import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { addFlashMessage } from '../actions';

const SignupPage = props => {
  const { addFlashMessage } = props;

  return (
    <div className="signup text-center">
      <h1>Signup</h1>
      <div className="row d-flex">
        <div className="col-4 col-offset-4 mx-auto">
          <SignupForm addFlashMessage={addFlashMessage} />
        </div>
      </div>

    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addFlashMessage: message => {
//     dispatch(addFlashMessage(message));
//   },
// });

SignupPage.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  // userLogin: PropTypes.func.isRequired,
};

export default connect(null, { addFlashMessage })(SignupPage);
