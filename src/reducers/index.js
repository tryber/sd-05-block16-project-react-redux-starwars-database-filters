import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import temporaryFilter from './TempFilterReducer';
import planetsReducer from './PlanetsReducer';

const rootReducer = combineReducers({
  filterReducer,
  temporaryFilter,
  planetsReducer,
});

export default rootReducer;
