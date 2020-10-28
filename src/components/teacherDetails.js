import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TeacherDetails = props => {
  const { match } = props;
  const { id } = match.params;
  const { teachers } = props;
  const currentTeacher = teachers[id];

  return (
    <div className="teacher-details-container">
      <div className="container-back">
        <Link to="/teachers">
          <h2 className="back">Go Back</h2>
        </Link>
      </div>
      <div className="teacher-details">
        <img className="details-teacher-img" src={currentTeacher.image} alt="teacher" />
        <h4>Name</h4>
        <p>{currentTeacher.name}</p>
        <h4>Description</h4>
        <p>{currentTeacher.description}</p>
        <form>
          <h4>Schedule a Class:</h4>
          <label htmlFor="teacher-schedule">
            Select your preferred day and time between 8:00am and 4:00pm
            <input id="teacher-schedule" type="datetime-local" step="60000" required />
          </label>
          <input type="submit" value="Book Schedule" />
        </form>

      </div>
    </div>
  );
};

TeacherDetails.propTypes = {
  teachers: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  teachers: state.teachers.teachers,
  currentTeacher: state.teachers.currentTeacher,
});

export default connect(mapStateToProps, null)(TeacherDetails);
