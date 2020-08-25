import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import reducerFilter from './reducerFilter';

const rootReducer = combineReducers({
  planetsReducer,
  reducerFilter,
});

export default rootReducer;

/* Estrutura retirada dos exercícios do bloco 16 */
