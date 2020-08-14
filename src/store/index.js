import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// test do projeto quer que seja importado desde 'src/reducers/index.js', deve ser correto assim

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
