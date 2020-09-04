import { combineReducers } from 'redux';
import reduceApi from './reduceApi';
import reduceFilter from './reduceFilter';

const rootReducer = combineReducers({
  reduceApi,
  filter: reduceFilter,
});

export default rootReducer;
