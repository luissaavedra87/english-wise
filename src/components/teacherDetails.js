import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppoinmentForm from './AppoinmentForm';

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
        <AppoinmentForm />
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
