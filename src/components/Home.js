import React from 'react';
import { Link } from 'react-router-dom';
import teacherSalon from '../resources/teacher-salon.jpg';

const Home = () => {
  const text = (
    <h3>
      Welcome back to English Wise
    </h3>
  );

  return (
    <>
      <div className="home">
        <div>{text}</div>
        <img src={teacherSalon} alt="teacher-salon" />
        <div>
          If you are looking for a personal learning,&nbsp;
          search between our teachers and schedule a 1 hour class.
        </div>
      </div>
      <Link to="/schedule">User Schedule</Link>
    </>
  );
};

export default Home;
