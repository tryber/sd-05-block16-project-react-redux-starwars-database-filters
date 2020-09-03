import { combineReducers } from 'redux';

import planetsReducer from './planetsReducer';

const reducers = combineReducers({ planetsReducer });

export default reducers;
