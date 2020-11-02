import React from 'react';
import PropTypes from 'prop-types';

const ScheduleCard = props => {
  const { appoinment } = props;

  return (
    <div>{JSON.stringify(appoinment)}</div>
  );
};

ScheduleCard.propTypes = {
  appoinment: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ScheduleCard;
