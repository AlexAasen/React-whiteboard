import { ADD_POSTIT, REMOVE_POSTIT } from '../constants/action-types';

const reducer =  (state = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      return [...state, newPostIt];
    }
    case REMOVE_POSTIT: {
      const id = Object.assign({}, action.data);
      newState = state.filter(postit => postit.id !== id);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
