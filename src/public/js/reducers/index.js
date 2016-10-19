import { combineReducers } from 'redux';
import backlog from './backlog';
import stories from './stories';
import currsprint from './currsprint';
import wip from './wip';
import test from './test';
import done from './done';
import visfilter from './visfilter';
import services from './services';
import postitrequirements from './postitrequirements';

export default combineReducers({
  backlog,
  stories,
  currsprint,
  wip,
  test,
  done,
  visfilter,
  services,
  postitrequirements
});
