import { combineReducers } from 'redux';
import starWaresReducer from './starWarsReducers';

const rootReducer = combineReducers({
  starWaresReducer,
});
export default rootReducer;
