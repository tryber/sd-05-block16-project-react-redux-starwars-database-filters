import { combineReducers } from 'redux';

import apiPlanetReducer from './apiPlanetReducer';

const rootReducer = combineReducers({
  apiPlanetReducer,
})

export default rootReducer;
