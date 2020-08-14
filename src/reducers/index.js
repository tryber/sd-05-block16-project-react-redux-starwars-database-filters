import { combineReducers } from 'redux';
import PlanetReducer from './PlanetReducer';
import FormReducer from './FormReducer';

const reducers = combineReducers({
  planets: PlanetReducer,
  filters: FormReducer,
});

export default reducers;