import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteToken } from '../helpers/authHelper';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = props => {
  const { username, logout } = props;
  // const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logout());
    logout();
    deleteToken();
  };

  return (
    <nav className="nav navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="./resources/english-logo.jpg" alt="title" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <button type="button">
            User
            {username}
            {/* {user.username.split(' ')[0]} */}
          </button>
        </Link>
        <Link to="/">
          <button type="button" onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </nav>
  );
};

//   return (
//     <nav className="nav navbar">
//       <div className="logo-container">
//         <Link to="/">
//           <img src="./resources/english-logo.jpg" alt="title" />
//         </Link>
//       </div>
//       <div>
//         <Link to="/login">
//           <button type="button">Login</button>
//         </Link>
//         <Link to="/signup">
//           <button type="button">Signup</button>
//         </Link>
//       </div>
//     </nav>
//   );

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  // user: PropTypes.objectOf(PropTypes.any).isRequired,
  // user: PropTypes.shape({
  //   logged: PropTypes.bool,
  //   username: PropTypes.string,
  // }).isRequired,
};

export default Nav;
