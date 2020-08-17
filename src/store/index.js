import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Compose with Dev Tools reference: https://www.npmjs.com/package/redux-devtools-extension
import thunk from 'redux-thunk';
import fetchReducer from '../reducers/index';

const rootReducer = combineReducers({ fetchReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
