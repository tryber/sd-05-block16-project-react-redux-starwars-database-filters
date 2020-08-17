import { combineReducers } from 'redux';
import reducer from './reducer';
import filters from './filters';

const rootReducer = combineReducers({
  reducer, filters,
});

export default rootReducer;
