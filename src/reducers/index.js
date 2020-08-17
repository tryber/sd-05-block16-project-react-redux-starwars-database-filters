import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filters from './filters';

const reducer = combineReducers({ fetchReducer, filters });

export default reducer;
