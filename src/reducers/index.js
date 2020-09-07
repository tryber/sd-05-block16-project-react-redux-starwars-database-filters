import { combineReducers } from 'redux';

import planetsReducer from './planetsReducer';

import filters from './filterReducer';

const reducers = combineReducers({ planetsReducer, filters });

export default reducers;
