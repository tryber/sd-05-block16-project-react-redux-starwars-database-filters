import { combineReducers } from 'redux';
import planetR from './planetReducer';
import filters from './filters';
import filtersRemoveReturn from './filtersRemoveReturn';
import filterASC from './filterASC';

const rootReducer = combineReducers({
  planetR,
  filters,
  filterASC,
  filtersRemoveReturn,
});

export default rootReducer;
