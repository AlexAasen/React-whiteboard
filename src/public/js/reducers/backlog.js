import { ADD_POSTIT_TO_BACKLOG, REMOVE_POSTIT, UPDATE_POSTIT } from '../constants/action-types';

const reducer =  (state = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_POSTIT_TO_BACKLOG: {
      const newPostIt = Object.assign({}, action.data);
      return [...state, newPostIt];
    }
    case REMOVE_POSTIT: {
      const id = action.data;
      newState = state.filter(postit => postit.id !== id);
      return newState;
    }
    case UPDATE_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      newState = Object.assign({}, state, state.map(postIt =>
          //Is the current postIt.id equal to the id we're looking for?
          postIt.id === newPostIt.id ?
          //if it is then change the postIts values
          Object.assign({}, postIt, newPostIt) :
         //if it isn't, then leave the value as it was
         postIt)
       );
       return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
