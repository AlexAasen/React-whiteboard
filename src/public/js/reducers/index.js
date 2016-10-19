import { combineReducers } from 'redux';
import backlog from './backlog';
import stories from './stories';
import currsprint from './currsprint';
import wip from './wip';
import test from './test';
import done from './done';
import services from './services';
import postitrequirements from './postitrequirements';
import add from './add';
import edit from './edit';

export default combineReducers({
  backlog,
  stories,
  currsprint,
  wip,
  test,
  done,
  services,
  postitrequirements
  add,
  edit
});
