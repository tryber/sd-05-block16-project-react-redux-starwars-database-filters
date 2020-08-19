// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '../reducers';

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
// Store mudada de acordo com recomendação do Rafael Quinteiro para rodar
// o devtools
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/index';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
