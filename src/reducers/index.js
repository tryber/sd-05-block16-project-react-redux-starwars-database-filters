import { combineReducers } from 'redux';

import planetReducer from './planetReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({ planetReducer, filterReducer });

export default rootReducer;
