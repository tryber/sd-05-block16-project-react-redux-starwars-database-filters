import { combineReducers } from 'redux';

import planetsReducer from './planetsReducer';
import filterReducer from './filterByNameReducer';

const reducers = combineReducers({ planetsReducer, filterReducer });

export default reducers;
