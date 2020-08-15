import { combineReducers } from 'redux';
import getPlanets from './getPlanets';
import filters from './filters';

export default combineReducers({
  getPlanets,
  filters,
});
