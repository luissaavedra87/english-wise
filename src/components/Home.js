import React from 'react';
// import { useSelector } from 'react-redux';

const Home = user => {
  const text = user ? (
    <h1>
      {user.username}
      , welcome back to English Wise
    </h1>
  ) : (
    <h1>Welcome, please Login or Signup</h1>
  );

  return (
    <div className="home">
      <div>{text}</div>
      <img src="./resources/teacher-salon.jpg" alt="teacher-salon" />
      <h2>You are not logged in</h2>
      <div>
        If you are looking for a personal learning,&nbsp;
        search between our teachers and schedule a class.
      </div>
    </div>
  );
};

export default Home;
