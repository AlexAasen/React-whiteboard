import { REMOVE_REQUIREMENT, ADD_REQUIREMENT } from '../constants/action-types';

const reducer =  (state = [], action) => {
  let newState;
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
    default: {
      return state;
    }
  }
};

export default reducer;
