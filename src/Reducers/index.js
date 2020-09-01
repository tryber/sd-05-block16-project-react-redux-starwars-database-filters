import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import temporaryFilter from './TempFilterReducer';

const rootReducer = combineReducers({
  filterReducer,
  temporaryFilter,
});

export default rootReducer;
