import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const Nav = props => {
  const { user, logout } = props;
  // const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    localStorage.clear();
  };

  if (user.logged) {
    return (
      <nav>
        <div className="logo-container">
          <Link to="/">
            <img src="./resources/english-logo.jpg" alt="title" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <button type="button">{user.username.split(' ')[0]}</button>
          </Link>
          <Link to="/login">
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
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    logged: PropTypes.bool,
    username: PropTypes.string,
  }).isRequired,
};

export default Nav;
