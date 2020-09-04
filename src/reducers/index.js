import { combineReducers } from 'redux';

import planetsReducer from './planetsReducer';

import filters from './filterByNameReducer';

const reducers = combineReducers({ planetsReducer, filters });

export default reducers;
