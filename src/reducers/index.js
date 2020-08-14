import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filterReducer from './filterReducer';
import fetchData from '../components/FetchData';

const reducer = combineReducers({
  fetchReducer,
  filterReducer,
});

export const store = createStore(reducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// implementacoes dos parametros baseados em referencias dos exercicios e conteudos do course
store.dispatch(fetchData());
//  console.log(store.subscriber());

export default reducer;
