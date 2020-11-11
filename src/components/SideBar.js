import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoIcon from '../resources/english-wise-icon.png';

const SideBar = props => {
  const { sidebar, close } = props;
  const [sidebarClass, setSidebarClass] = useState(sidebar);

  const closeHandler = e => {
    e.preventDefault();
    setSidebarClass('sidebar close');
    setTimeout(() => {
      close();
    }, 1000);
  };

  return (
    <nav className={sidebarClass}>
      <div id="close">
        <FontAwesomeIcon icon={faArrowLeft} onClick={closeHandler} />
      </div>
      <div className="sidebar-header">
        <img src={logoIcon} alt="logo Icon" />
      </div>
      <ul className="list-unstyled sidenav-list">
        <p>Select from the Menu:</p>
        <hr />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teachers">Teachers</Link>
        </li>
        <li>
          <Link to="/schedule">User Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

SideBar.propTypes = {
  sidebar: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default SideBar;
