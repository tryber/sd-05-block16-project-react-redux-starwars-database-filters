import { combineReducers } from 'redux';
import filters from './dataReducer';

const rootReducer = combineReducers({
  filters,
});

export default rootReducer;
