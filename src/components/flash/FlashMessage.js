import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FlashMessage = ({ message, deleteFlashMessage }) => {
  const { type, text } = message;

  const handleClick = () => {
    deleteFlashMessage(message);
  };

  // const { type, text } = message;
  return (
    <div className={classnames('alert', {
      'alert-success': type === 'success',
      'alert-danger': type === 'error',
    })}
    >
      <button type="button" onClick={handleClick} className="close"><span>&times;</span></button>
      {text}
    </div>
  );
};

FlashMessage.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessage;

// class FlashMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.props.deleteFlashMessage(this.props.message.id);
//   }

//   render() {
//     const { type, text } = this.props.message;
//     return (
//       <div className={classnames('alert', {
//         'alert-success': type === 'success',
//         'alert-danger': type === 'error',
//       })}>
//         <button type="button" onClick={this.onClick} className="close"><span>&times;</span></button>
//         {text}
//       </div>
//     );
//   }
// }

// FlashMessage.propTypes = {
//   message: PropTypes.objectOf(PropTypes.any).isRequired,
//   deleteFlashMessage: PropTypes.func.isRequired,
// };

// export default FlashMessage;
