import { combineReducers } from 'redux';
import planetR from './planetReducer';
import filters from './filters';
import filtersRemoveReturn from './filtersRemoveReturn';

const rootReducer = combineReducers({
  planetR,
  filters,
  filtersRemoveReturn,
});

export default rootReducer;
