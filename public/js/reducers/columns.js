import { ADD_POSTIT, REMOVE_POSTIT, UPDATE_POSTIT, UPDATE_POSTIT_COLUMN, ADD_COLUMN } from '../constants/action-types';

const reducer = (state = [], action) => {
  let columnsState;
  switch (action.type) {
    case ADD_COLUMN: {
      const newCol = Object.assign({}, action.data);
      columnsState = [...state, newCol];
      return columnsState;
    }
    case ADD_POSTIT: {
      const postIt = Object.assign({}, action.data);
      columnsState = Object.assign({}, state);
      //make a new copy of first column, aka backlog and add postIt to it.
      columnsState[0] = [...columnsState[0], postIt];
      return columnsState;
    }
    case UPDATE_POSTIT: {
      const newPostIt = Object.assign({}, action.data);
      //Make a copy of columns state
      columnsState = Object.assign({}, state);
      //Look through the state of columns, give an input of what to search for
      //and a value to switch the selected item to.
      return columnsState[newPostIt.columnId].map(postIt =>
        //Is the current postIt.id equal to the id we're looking for?
        postIt.id === newPostIt.id ?
        //if it is then change the postIts values
        Object.assign({}, postIt, newPostIt) :
        //if it isn't, then leave the value as it was
        postIt
      );
    }
    case UPDATE_POSTIT_COLUMN: {
      const newPostIt = Object.assign({}, action.data);
      const oldPostIt = Object.assign({}, action.oldData);
      columnsState = Object.assign({}, state);
      //Begin by loading the oldPostits column and filtering the postIt out.
      columnsState[oldPostIt.columnId] = columnsState[oldPostIt.columnId].filter(postit => postit.id !== oldPostIt.id);
      //Then add the postIt to the new column
      columnsState[newPostIt.columnId] = [...columnsState[newPostIt.columnId], postIt];
      return columnsState;
    }
    case REMOVE_POSTIT: {
      const postIt = Object.assign({}, action.data);
      columnsState = Object.assign({}, state);
      //Filter through the column in which the postIt lives and return the column without it
      columnsState[postIt.columnId] = columnsState[postIt.columnId].filter(postit => postit.id !== postIt.id);
      return columnsState;
    }
    default: {
      return columnsState;
    }
  }
}

export default reducer;
