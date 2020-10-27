import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentTeacher } from '../actions/index';

const TeacherSlide = props => {
  const {
    id, image, teacher, setCurrentTeacher,
  } = props;

  const handleClick = () => {
    setCurrentTeacher(teacher);
  };

  return (
    <Link key={`link${id}`} to={`/details/${id}`} onClick={handleClick}>
      <img key={`teacher${id}`} src={image} alt="teachers" className="teacher-image" />
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentTeacher: teacher => {
    dispatch(setCurrentTeacher(teacher));
  },
});

TeacherSlide.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  teacher: PropTypes.objectOf(PropTypes.any).isRequired,
  setCurrentTeacher: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TeacherSlide);
