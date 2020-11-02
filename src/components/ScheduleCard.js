import React from 'react';
import PropTypes from 'prop-types';

const ScheduleCard = props => {
  const { id, schedule, teacherId } = props;

  return (
    <>
      <td>{id}</td>
      <td>{schedule}</td>
      <td>{teacherId}</td>
    </>
  );
};

ScheduleCard.propTypes = {
  id: PropTypes.number.isRequired,
  schedule: PropTypes.string.isRequired,
  teacherId: PropTypes.number.isRequired,
};

export default ScheduleCard;
