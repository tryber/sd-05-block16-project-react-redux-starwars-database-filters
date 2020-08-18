import { combineReducers } from 'redux';
import starWars from './Worlds';
import filters from './FilterReducer';

const rootReducer = combineReducers({
  starWars,
  filters,
});

export default rootReducer;
