import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const { createStore, applyMiddleware } = require("redux");

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
