import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

const FlashMessage = props => {
  const { message, deleteFlashMessage } = props;
  const { text } = message;

  const handleClick = () => {
    deleteFlashMessage(message);
  };

  return (
    <div className="alert alert-success">
      <button type="button" className="close" aria-label="Close" onClick={handleClick}>
        <span aria-hidden="true">&times;</span>
      </button>
      {text}
    </div>
  );
};

FlashMessage.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessage;
