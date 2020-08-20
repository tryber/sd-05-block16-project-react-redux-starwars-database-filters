import { createStore, applyMiddleware } from 'redux';
// import { DevTools } from 'redux-devtools';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers/index';
// import starWarsAPI from '../../services/StarWarsPlanetsAPI';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
