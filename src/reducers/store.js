import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const { default: reducer } = require('.');


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
