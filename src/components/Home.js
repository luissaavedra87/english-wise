import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux'

const Home = props => {
  // const { username } = props;

  const text = (
    <h1>
      Welcome back to English Wise
    </h1>
  );

  return (
    <>
      <div className="home">
        <div>{text}</div>
        <img src="./resources/teacher-salon.jpg" alt="teacher-salon" />
        {/* <h2>You are not logged in</h2> */}
        <div>
          If you are looking for a personal learning,&nbsp;
          search between our teachers and schedule a class.
        </div>
      </div>
      <Link to="/schedule">User Schedule</Link>
    </>
  );
};

// Home.propTypes = {
//   username: PropTypes.string.isRequired,
//   user: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default Home;
