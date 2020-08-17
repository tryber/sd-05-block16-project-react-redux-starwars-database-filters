import { combineReducers } from 'redux';

function emptyReducer() {
  return {};
}
const rootReducer = combineReducers({ emptyReducer });

export default rootReducer;
