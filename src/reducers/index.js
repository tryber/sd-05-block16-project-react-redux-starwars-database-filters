import { combineReducers } from 'redux';
import reducerBasico from './reducerBasico';
import filters from './filters';


export default combineReducers({
  reducerBasico,
  filters,
});
