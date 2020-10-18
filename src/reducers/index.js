import { combineReducers } from 'redux';
import { apiReducer, filters, selectReducer, sortReducer } from './filterReducer';

const rootReducer = combineReducers({
  apiReducer,
  filters,
  selectReducer,
  sortReducer,
});

export default rootReducer;
