import { combineReducers } from 'redux';
import columns from './columns';
import visfilter from './visFilter';

/*
const reducer = (state, action) => ({
  basket: basket(state.basket, action),
  user: user(state.user, action),
  pets: pets(state.pets, action)
});
*/

const reducer = combineReducers({
  columns,
  visfilter
});

export default reducer;
