import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createAppoinment} from '../services/englishWiseApi';

const AppoinmentForm = props => {
  const [appoinment, setAppoinment] = useState();

  const handleChange = e => {
    if (e.target.id === 'teacher-appointment') {
      setAppoinment(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const appoinment = `${appoinmentDate}${appoinmnetTime}`;
    const newAppoinment = { appoinment };

    createAppoinment(newAppoinment)
      .then(data => {
        const { setNewAppoinment } = props;
        if (data.error) {
          console.log(data.error);
        } else {
          setNewAppoinment(data);
        }
      });
  };

  return (
    <form className="apooinment-form" onSubmit={handleSubmit}>
      <h4>Schedule a Class:</h4>
      <label htmlFor="teacher-appoinment">
        Select your preferred day and time between 8:00am and 4:00pm
        <input id="teacher-schedule" type="datetime-local" step="60000" required onChange={handleChange} />
      </label>
      <input type="submit" value="Book Schedule" />
    </form>
  );
};

AppoinmentForm.propTypes = {
  setNewAppoinment: PropTypes.func.isRequired,
};

export default AppoinmentForm;
