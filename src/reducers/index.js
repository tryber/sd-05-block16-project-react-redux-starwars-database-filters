import { combineReducers } from 'redux';
import filters from './Filters';
import temporaryFilter from './TempFilterReducer';
import data from './Data';

// chatisse de linha no final que não resolve

const rootReducer = combineReducers({
  filters,
  temporaryFilter,
  data,
});

export default rootReducer;
