import { combineReducers } from 'redux';
import filters from './Filters';
import temporaryFilter from './TempFilterReducer';
import data from './Data';

const rootReducer = combineReducers({
  filters,
  temporaryFilter,
  data,
});

export default rootReducer;
