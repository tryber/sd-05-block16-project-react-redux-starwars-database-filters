import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// const rootReducer = combineReducers({ reducer });

const store = createStore(rootReducer, applyMiddleware(thunk), window.
  __REDUX_DEVTOOLS_EXTENSIONS__&& window.
  __REDUX_DEVTOOLS_EXTENSIONS__());

  export default store;
  