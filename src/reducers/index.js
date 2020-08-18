import { combineReducers } from 'redux';
import starWaresReducer from './starWarsReducers';
import filters from './filters';

const rootReducer = combineReducers({
  starWaresReducer,
  filters,
});
export default rootReducer;
