import { combineReducers } from 'redux';
import planetReducer from './planetReducer';

const rootReducer = combineReducers({
  planetReducer,
});

export default rootReducer;
