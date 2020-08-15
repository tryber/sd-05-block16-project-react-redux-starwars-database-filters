import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/index';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
