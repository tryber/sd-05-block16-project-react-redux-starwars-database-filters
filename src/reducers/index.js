import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import filters from './filtersReducer';

const rootReducer = combineReducers({ requestReducer, filters });

export default rootReducer;
