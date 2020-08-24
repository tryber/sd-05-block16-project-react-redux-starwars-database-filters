import { combineReducers } from 'redux';
import emptyReducer from './receiveReducer';

const rootReducer = combineReducers({
  emptyReducer,
});

export default rootReducer;
