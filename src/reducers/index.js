import { combineReducers } from 'redux';
import { CALL_API, RECEIVED_API } from '../actions'

const INITIAL_STATE = {
  isFetching: false,
  planets: []
}

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALL_API:
  return {
    ...state,
    isFetching: true
  }
    case RECEIVED_API:
      return {
        ...state,
        isFetching: false,
        planets: action.planets        
      }
    default:
      return state;
}
};

const rootReducer = combineReducers({
  planetsReducer,
})

export default rootReducer;
