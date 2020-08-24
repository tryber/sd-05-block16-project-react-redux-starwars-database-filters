import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// thunk para permitir lhe dar com operações assíncronas.
// applyMiddleware faz o meio de campo entre o redux e o thunks.
// compose serve para poder utilizar o redux dev tools com thunks.

import rootReducer from '../reducers';

/* const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
 */
// Usando reduxdevtools com thunk
// https://medium.com/@e_himmelfarb/implement-redux-devtools-extension-with-thunk-and-other-async-middleware-20e97100b2b0
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f));

export default store;
