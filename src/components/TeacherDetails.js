import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import AppoinmentForm from './AppoinmentForm';

const TeacherDetails = props => {
  const { match } = props;
  const { id } = match.params;
  const { teachers } = props;
  const currentTeacher = teachers[id];

  if (currentTeacher) {
    return (
      <div className="teacher-details-container">
        <div className="container-back">
          <Link to="/teachers">
            <h4 className="back ml-5">Go Back</h4>
          </Link>
        </div>
        <div className="teacher-details">
          <div className="d-flex justify-content-around mb-3">
            <img className="details-teacher-img mx-5" src={currentTeacher.image} alt="teacher" />
            <div className="d-flex flex-column mr-5 justify-content-center">
              <h4>Name</h4>
              <p>{currentTeacher.name}</p>
              <h4>Teacher Id</h4>
              <p>{currentTeacher.id}</p>
              <h4>Description</h4>
              <p>{currentTeacher.description}</p>
            </div>
          </div>
          <hr />
          <AppoinmentForm currentTeacherId={currentTeacher.id} />
        </div>
      </div>
    );
  }

  return <Redirect to="/" />;
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

export default connect(mapStateToProps, null)(withRouter(TeacherDetails));
