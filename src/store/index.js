import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import planetReducer from '../reducers/index';

const store = createStore(planetReducer, applyMiddleware(thunk));

export default store;
