import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// caminho certo requerido para passar nos tests

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
