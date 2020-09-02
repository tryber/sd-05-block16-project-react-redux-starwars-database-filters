import { combineReducers } from 'redux';
import reducerBasico from './reducerBasico';
import filters from './filters';
import select from './select';


export default combineReducers({
  reducerBasico,
  filters,
  select,
});
