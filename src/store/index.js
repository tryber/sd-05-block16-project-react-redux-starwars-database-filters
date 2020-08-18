import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Compose with Dev Tools reference: https://www.npmjs.com/package/redux-devtools-extension
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
