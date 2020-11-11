import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { deleteToken } from '../helpers/authHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../resources/english-logo.png';

const Nav = props => {
  const { logout, openHandler } = props;
  const user = useSelector(state => state.user.user);

  const handleOpen = () => {
    openHandler();
  };

  const handleLogout = () => {
    logout();
    deleteToken();
  };

  return (
    <>
      <nav className="nav navbar">
        {user ? (
          <div className="d-flex w-100 justify-content-between">
            <div id="sidebarCollapse" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBars} onClick={handleOpen} />
            </div>
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="english wise Logo" />
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <Link to="/">
                <button className="btn display-user text-uppercase" type="button">
                  {user.username}
                </button>
              </Link>
              <Link to="/">
                <button data-testid="logout" className="btn btn-danger" type="button" onClick={handleLogout}>Logout</button>
              </Link>
            </div>
          </div>
        ) : <div>Loading...</div>}
      </nav>
      <hr />
    </>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  openHandler: PropTypes.func.isRequired,
};

export default Nav;
