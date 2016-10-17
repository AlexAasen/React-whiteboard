import { combineReducers } from 'redux';
import columns from './columns';
import visFilter from './visFilter';

/*
const reducer = (state, action) => ({
  basket: basket(state.basket, action),
  user: user(state.user, action),
  pets: pets(state.pets, action)
});
*/

const reducer = combineReducers({
  columns,
  visFilter
});

export default reducer;
