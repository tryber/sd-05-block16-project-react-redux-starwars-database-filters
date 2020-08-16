import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import emptyReducer from '../reducers';


const store = createStore(emptyReducer, applyMiddleware(thunk));

export default store;
