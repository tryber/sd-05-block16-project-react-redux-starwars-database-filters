import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';

const rootReducer = combineReducers({
  planetsReducer,
});

export default rootReducer;
