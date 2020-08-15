import { combineReducers } from 'redux';
import API from './dataReducer';
import filters from './filterReducer';

const rootReducer = combineReducers({ API, filters });

export default rootReducer;
