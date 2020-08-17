import { combineReducers } from 'redux';

import planetsList from './planetsList';
import filters from './filters';

const rootReducer = combineReducers({ planetsList, filters });

export default rootReducer;
