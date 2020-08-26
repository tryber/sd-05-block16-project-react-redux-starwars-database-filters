import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Usando applyMiddleware(thunk), é um modo de integrar thunk na aplicação redux;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
