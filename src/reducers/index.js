import { combineReducers } from 'redux';

import {
  RECEIVE_PLANETS_FAILURE,
  RECEIVE_PLANETS_SUCCESS,
  REQUEST_PLANETS,
} from '../actions';

const INITIAL_PLANET = {
  isFetching: false,
  data: [],
  error: '',
};

const reducer = (state = INITIAL_PLANET, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case RECEIVE_PLANETS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;

// function emptyReducer() {
//   return {};
// }

// export default emptyReducer;
