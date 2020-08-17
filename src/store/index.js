import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const { createStore, applyMiddleware } = require('redux');

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
