import { ADD_POSTIT, REMOVE_POSTIT, UPDATE_POSTIT, UPDATE_POSTIT_COLUMN, ADD_COLUMN } from '../constants/action-types';

const reducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    /*case ADD_COLUMN: {
      const newCol = Object.assign({}, action.data);
      newState = Object.assign({}, state, [...state.columns, newCol]);
      return newState;
    }*/
    case ADD_POSTIT: {
      const postIt = Object.assign({}, action.data);
      newState = [...state, postIt];
      return newState;
    }
    case UPDATE_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      //Make a copy of columns state
      //Look through the state of columns, give an input of what to search for
      //and a value to switch the selected item to.
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
    case REMOVE_POSTIT: {
      const postIt = Object.assign({}, action.data);
      //Filter through the column in which the postIt lives and return the column without it
      newState = state.filter(postit => postit.id !== postIt.id);
      return newState;
    }
    case UPDATE_POSTIT_COLUMN: {
      const newPostIt = Object.assign({}, action.data);
      const oldPostIt = Object.assign({}, action.oldData);
      newState = Object.assign({}, columns);
      //Begin by loading the oldPostits column and filtering the postIt out.
      newState[oldPostIt.columnId] = newState[oldPostIt.columnId].filter(postit => postit.id !== oldPostIt.id);
      //Then add the postIt to the new column
      newState[newPostIt.columnId] = [...newState[newPostIt.columnId], postIt];
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
