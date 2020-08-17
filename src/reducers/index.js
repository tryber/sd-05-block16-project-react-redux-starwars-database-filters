import { combineReducers } from 'redux';
import starWars from './Worlds';

const rootReducer = combineReducers({
  starWars,
});

export default rootReducer;
