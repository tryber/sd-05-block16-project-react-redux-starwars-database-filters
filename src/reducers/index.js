import { combineReducers } from 'redux';
import requestReducer from './requestReducer';

function emptyReducer() {
  return {};
}

const rootReducer = combineReducers({ emptyReducer, requestReducer });

export default rootReducer;
