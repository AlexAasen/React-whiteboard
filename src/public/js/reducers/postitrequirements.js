import { REMOVE_REQUIREMENT, ADD_REQUIREMENT, GET_ALL_REQUIREMENTS, REMOVE_ALL_REQUIREMENTS } from '../constants/action-types';

const reducer = (state = [], action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_REQUIREMENT: {
      const newRequirement = Object.assign({}, action.data);
      return [...state, newRequirement];
    }
    case REMOVE_REQUIREMENT: {
      const id = action.data;
      newState = state.filter(requirement => requirement.id !== id);
      return newState;
    }
    case GET_ALL_REQUIREMENTS: {
      return Object.assign({}, action.data);
    }
    case REMOVE_ALL_REQUIREMENTS: {
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
