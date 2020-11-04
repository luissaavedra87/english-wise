import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/index';

const flashMessages = (state = [], action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [...state, action.message];
    case DELETE_FLASH_MESSAGE:
      return [...state.filter(message => message.id !== action.id)];
    default:
      return state;
  }
};

export default flashMessages;
