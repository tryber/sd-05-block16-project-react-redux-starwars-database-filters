import { combineReducers } from 'redux';
import starWaresReducer from './starWarsReducers';
import filterNameReducer from './filterNameReducer';

const rootReducer = combineReducers({
  starWaresReducer,
  filterNameReducer,
});
export default rootReducer;
