import { ADD_POSTIT, REMOVE_POSTIT, UPDATE_POSTIT } from '../constants/action-types';

const reducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      return [...state, newPostIt];
    }
    case REMOVE_POSTIT: {
      newState = state.filter(postit => postit.id !== action.data);
      return newState;
    }
    case UPDATE_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      newState = state.filter(postit => postit.id !== action.data.id);
      return [...newState, newPostIt];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
