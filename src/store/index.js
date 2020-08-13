import thunk from 'redux-thunk';
import reducer from '../reducers';
// test do projeto quer que seja importado desde 'src/reducers/index.js', deve ser correto assim

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
