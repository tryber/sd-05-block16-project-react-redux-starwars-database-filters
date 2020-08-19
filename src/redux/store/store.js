import { createStore, applyMiddleware } from 'redux';
import { DevTools } from 'redux-devtools';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/index';

const store = createStore(reducers, DevTools(applyMiddleware(ReduxThunk)));

export default store;
