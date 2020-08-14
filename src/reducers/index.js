import { combineReducers } from 'redux';
import getPlanets from './getPlanets';
import filter from './filter';

export default combineReducers({
  getPlanets,
  filter,
});
