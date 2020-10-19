import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteToken } from '../helpers/authHelper';

const Nav = props => {
  const { user, logout, loggedIn } = props;
  // const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logout());
    logout();
    deleteToken();
  };

  if (loggedIn) {
    return (
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src="./resources/english-logo.jpg" alt="title" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <button type="button">
              User
              {user.username}
              {/* {user.username.split(' ')[0]} */}
            </button>
          </Link>
          <Link to="/">
            <button type="button" onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="./resources/english-logo.jpg" alt="title" />
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button type="button">Login</button>
        </Link>
        <Link to="/signup">
          <button type="button">Signup</button>
        </Link>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    logged: PropTypes.bool,
    username: PropTypes.string,
  }).isRequired,
};

export default Nav;
