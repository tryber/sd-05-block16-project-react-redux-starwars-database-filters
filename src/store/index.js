import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

// compose based on this repository = https://github.com/zalmoxisus/redux-devtools-extension

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
