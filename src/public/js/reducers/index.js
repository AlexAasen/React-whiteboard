import { combineReducers } from 'redux';
import column from './column';
import services from './services';
import postitrequirements from './postitrequirements';
import add from './add';
import edit from './edit';
import error from './error';

export default combineReducers({
  column,
  services,
  postitrequirements,
  add,
  error,
  edit
});
