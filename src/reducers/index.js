import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import ReducerFilter from './reducerFilter';

const rootReducer = combineReducers({
  planetsReducer,
  ReducerFilter,
});

export default rootReducer;

/* Estrutura retirada dos exercícios do bloco 16 */
