import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Compose with Dev Tools reference: https://www.npmjs.com/package/redux-devtools-extension

export default store;
