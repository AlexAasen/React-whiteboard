export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POSTIT': {
      const newPostIt = Object.assign({}, action.data, { id: action.data.id || state.legth });
      return [...state, newPostIt];
    }
    default: {
      return state;
    }
  }
};
