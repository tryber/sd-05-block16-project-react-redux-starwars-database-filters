import { combineReducers } from 'redux';
import planetR from './planetReducer';
import filters from './filters';
import filterByName from './filterByName';
import filtersRemoveReturn from './filtersRemoveReturn';

const rootReducer = combineReducers({
  planetR,
  filters,
  filtersRemoveReturn,
  filterByName,
});

export default rootReducer;
