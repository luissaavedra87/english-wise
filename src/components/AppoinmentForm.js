import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAppoinment } from '../services/englishWiseApi';
// import { setNewAppoinment } from '../actions/index';

const AppoinmentForm = props => {
  const [appoinmentDate, setAppoinmentDate] = useState();
  const [appoinmentTime, setAppoinmentTime] = useState();

  const { currentTeacherId, user } = props;

  // const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.id === 'teacher-appoinment-date') {
      setAppoinmentDate(e.target.value);
    }
    if (e.target.id === 'teacher-appoinment-time') {
      setAppoinmentTime(e.target.value);
    }
  };

  const appoinment = `${appoinmentDate}T${appoinmentTime}`;

  const handleSubmit = e => {
    e.preventDefault();
    const newAppoinment = {
      teacher_id: currentTeacherId,
      user_id: user.user.id,
      schedule: appoinment,
      status: true,
    };
    console.log(newAppoinment);

    createAppoinment(newAppoinment)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        }
        // else {
        // dispatch(setNewAppoinment(data));
        // add the toast alert instead of dispatch
        // }
      });
  };

  return (
    <form className="apooinment-form" onSubmit={handleSubmit}>
      <h4>Schedule a Class:</h4>
      <label htmlFor="teacher-appoinment-date">
        Select your preferred day and time between 8:00am and 4:00pm
        <input id="teacher-appoinment-date" type="date" onChange={handleChange} required />
      </label>
      <label htmlFor="teacher-appoinment-time">
        <input id="teacher-appoinment-time" type="time" step="3600" min="08:00" max="16:00" onChange={handleChange} required />
      </label>
      <input type="submit" value="Book Schedule" />
    </form>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

AppoinmentForm.propTypes = {
  currentTeacherId: PropTypes.number.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(AppoinmentForm);
