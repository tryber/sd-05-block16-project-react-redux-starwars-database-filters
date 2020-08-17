import { combineReducers } from 'redux';
import starWars from './Worlds';
import filterReducer from './FilterReducer';

const rootReducer = combineReducers({
  starWars,
  filterReducer,
});

export default rootReducer;
