import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filters from './filterReducer';
// import fetchData from '../components/FetchData';

const reducer = combineReducers({
  fetchReducer,
  filters,
});

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// implementacoes dos parametros baseados em referencias dos exercicios e conteudos do course
// store.dispatch(fetchData());
// console.log(store.getState());
//
export default reducer;
