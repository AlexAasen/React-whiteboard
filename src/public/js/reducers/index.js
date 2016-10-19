import { combineReducers } from 'redux';
import backlog from './backlog';
import add from './add';
import edit from './edit';

export default combineReducers({
  backlog,
  add,
  edit
});
