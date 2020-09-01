import { combineReducers } from 'redux';
import reducer from './fetchReducer';
import filters from './filterReducer';

const rootReducer = combineReducers({ reducer, filters });

export default rootReducer;
