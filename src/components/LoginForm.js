import React, { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { userLogin } from '../services/englishWiseApi';
import { setToken } from '../helpers/authHelper';
import { addFlashMessage } from '../actions';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [error, setError] = useState([]);

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
        // const { userLogin } = props;
        console.log(data.user);
        addFlashMessage('Login succesfull');
        // userLogin(data.user);
        setToken(data.user);
        history.push('/');
      })
      .catch(error => {
        // setError(error);
        addFlashMessage('Login error, check email and password');
        console.log(error);
      });
  };

  // const renderErrors = error.map(err => <span key={err}>{err}</span>);

  return (
    <>
      {/* <div>{renderErrors}</div> */}
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
      </form>
    </>
  );
};

// LoginForm.propTypes = {
//   userLogin: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   userLogin: (email, password) => {
//     dispatch(userLogin(email, password));
//   },
// });

export default connect(null, { userLogin })(LoginForm);
