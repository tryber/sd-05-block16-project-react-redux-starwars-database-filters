import { combineReducers } from 'redux';
import planetR from './planetReducer';
import filters from './filters';

const rootReducer = combineReducers({
  planetR,
  filters,
});

export default rootReducer;
