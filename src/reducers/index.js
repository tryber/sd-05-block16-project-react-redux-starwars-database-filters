import { combineReducers } from 'redux';

import reducerPlanets from './reducerPlanets';

const rootReducer = combineReducers({
  reducerPlanets,
});

export default rootReducer;
