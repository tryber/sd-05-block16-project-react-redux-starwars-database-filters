import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import filters from './reducerFilter';

const rootReducer = combineReducers({
  planetsReducer,
  filters,
});

export default rootReducer;

/* Estrutura retirada dos exercícios do bloco 16 */
