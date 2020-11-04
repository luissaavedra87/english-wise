import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createAppoinment } from '../services/englishWiseApi';

const AppoinmentForm = props => {
  const [appoinmentDate, setAppoinmentDate] = useState();
  const [appoinmentTime, setAppoinmentTime] = useState();

  const { currentTeacherId, user } = props;

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

    createAppoinment(newAppoinment)
      .then(data => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success('Appoinment created');
        }
      });
  };

  return (
    <form className="apooinment-form d-flex flex-column mt-3 align-items-center" onSubmit={handleSubmit}>
      <h4>Schedule a Class:</h4>
      <p>Select your preferred day and time between 8:00am and 4:00pm</p>
      <div>
        <label htmlFor="teacher-appoinment-date">
          <input id="teacher-appoinment-date" type="date" onChange={handleChange} required />
        </label>
        <label htmlFor="teacher-appoinment-time">
          <input id="teacher-appoinment-time" type="time" step="3600" min="08:00" max="16:00" onChange={handleChange} required />
        </label>
      </div>
      <input className="btn btn-success" type="submit" value="Book Schedule" />
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
