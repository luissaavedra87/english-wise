import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const username = useSelector(state => state.username);
  const text = username ? (
    <h1>
      {username}
      , welcome back to English Wise
    </h1>
  ) : (
    <h1>Welcome, please Login or Signup</h1>
  );

  return (
    <div className="home">
      <div>{text}</div>
      <img src="./resources/teacher-salon.jpg" alt="teacher-salon" />
      <div>
        If you are looking for a personal learning,&nbsp;
        search between our teachers and schedule a class.
      </div>
    </div>
  );
};

export default Home;
