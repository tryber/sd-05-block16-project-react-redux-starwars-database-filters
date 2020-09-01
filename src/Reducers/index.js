import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';

const rootReducer = combineReducers({
  filterReducer,
});

export default rootReducer;
