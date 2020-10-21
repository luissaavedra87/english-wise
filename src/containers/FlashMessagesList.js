import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from '../components/FlashMessage';
import { deleteFlashMessage } from '../actions';

const FlashMessagesList = props => {
  const { messages, deleteFlashMessage } = props;
  messages
    .map((message, index) => (
      <FlashMessage
        key={index}
        message={message}
        deleteFlashMessage={deleteFlashMessage}
      />
    ));

  return (
    <div>{messages}</div>
  );
};

FlashMessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  messages: state.flashMessages,
});

const mapDispatchToProps = dispatch => ({
  deleteFlashMessage: id => {
    dispatch(deleteFlashMessage(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList);
