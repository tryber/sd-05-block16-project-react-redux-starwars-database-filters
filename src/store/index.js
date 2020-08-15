import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
