import React from 'react';
import teacherSalon from '../resources/teacher-salon.jpg';

const Home = () => {
  const text = (
    <h4 className="d-flex justify-content-center">
      Welcome back to English Wise
    </h4>
  );

  return (
    <>
      <div className="home mx-auto">
        <div>{text}</div>
        <div className="d-flex justify-content-center">
          <img src={teacherSalon} alt="teacher-salon" />
        </div>
        <div className="home-text mx-auto">
          If you are looking for a personal learning,&nbsp;
          search between our teachers and schedule a one hour class.
        </div>
      </div>
    </>
  );
};

export default Home;
