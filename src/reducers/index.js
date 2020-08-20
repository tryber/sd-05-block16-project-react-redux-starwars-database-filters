import { combineReducers } from 'redux';

import apiPlanetReducer from './apiPlanetReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({
  apiPlanetReducer,
  filters,
});

export default rootReducer;
