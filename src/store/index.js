import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/index';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// https://app.slack.com/client/TMDDFEPFU/C013105FU2C/thread/C013105FU2C-1597692015.144300
// sobre o composeWithDevTools
