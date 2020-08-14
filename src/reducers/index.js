import { combineReducers } from 'redux';
import { REQUEST_PLANETS, GET_PLANETS, BY_NAME } from '../actions';

const INITIAL_API_STATE = {
  isFetching: false,
  data: [],
};

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
};

function APIreducer(state = INITIAL_API_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case GET_PLANETS:
      return { ...state, data: action.planets.results };
    default:
      return state;
  }
}

function filters(state = INITIAL_FILTER, action) {
  switch (action.type) {
    case BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ APIreducer, filters });

export default rootReducer;
