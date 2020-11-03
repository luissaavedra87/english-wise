import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteToken } from '../helpers/authHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/english-logo.png';

const Nav = props => {
  const { logout } = props;
  const user = useSelector(state => state.user.user);

  const handleLogout = () => {
    logout();
    deleteToken();
  };

  return (
    <nav className="nav navbar">
      {user ? (
        <div className="d-flex w-100 justify-content-between">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="english wise Logo" />
            </Link>
          </div>
          <div>
            <Link to="/">
              <button type="button">
                {user.username}
              </button>
            </Link>
            <Link to="/">
              <button type="button" onClick={handleLogout}>Logout</button>
            </Link>
          </div>
        </div>
      ) : <div>Loading...</div>}
    </nav>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Nav;
