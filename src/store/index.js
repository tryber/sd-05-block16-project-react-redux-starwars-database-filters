import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducerPlanets from '../reducers/reducerPlanets';

const rootReducer = combineReducers({
  reducerPlanets,
});

// Usando applyMiddleware(thunk), é um modo de integrar thunk na aplicação redux;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
