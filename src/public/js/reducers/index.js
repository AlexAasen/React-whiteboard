import { combineReducers } from 'redux';
import postIts from './post-it';
import visfilter from './visfilter';

export default combineReducers({
  postIts,
  visfilter
});
