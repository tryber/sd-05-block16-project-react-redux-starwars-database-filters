import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import emptyReducer from '../reducers';

const composeEnhancers = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(emptyReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
