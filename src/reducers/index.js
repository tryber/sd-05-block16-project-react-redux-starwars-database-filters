import { combineReducers } from 'redux';
import RequestReducer from './RequestReducer';

function emptyReducer() {
  return {};
}

const rootReducer = combineReducers({ emptyReducer, RequestReducer });

export default rootReducer;
