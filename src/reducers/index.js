import { combineReducers } from 'redux';
import emptyReducer from './receiveReducer';
import filters from './filters';

const rootReducer = combineReducers({
  emptyReducer,
  filters,
});

export default rootReducer;
