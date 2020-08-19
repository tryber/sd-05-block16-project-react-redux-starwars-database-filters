import { combineReducers } from 'redux';
import swPlanetss from './swPlanets';
import filters from './filterReducer';

const rootReducer = combineReducers({
  swPlanetss, filters,
});
export default rootReducer;
