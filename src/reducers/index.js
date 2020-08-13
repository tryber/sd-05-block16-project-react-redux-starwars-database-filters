
import { combineReducers } from 'redux';
import receiveReducer from './receiveReducer';

const rootReducer = combineReducers({
  receiveReducer,
})

export default rootReducer;