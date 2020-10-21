// import shortid from 'shortid';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/index';

const flashMessages = (state = [], action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [...state, action.message];
      // return [
      //   ...state,
      //   {
      //     text: action.message.text,
      //     id: shortid.generate(),
      //     type: action.message.type,
      //   },
      // ];
    case DELETE_FLASH_MESSAGE:
      return [...state.filter(message => message.id !== action.id)];
    default:
      return state;
  }
};

export default flashMessages;
