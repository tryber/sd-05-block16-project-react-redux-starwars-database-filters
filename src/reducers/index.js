import { combineReducers } from 'redux';
import reducer from './reducer';
import filters from './filters';
import filterByNumericValues from './filterByNumericValues';

const rootReducer = combineReducers({
  reducer, filters, filterByNumericValues,
});

export default rootReducer;
