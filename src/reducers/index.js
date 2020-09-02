import { combineReducers } from 'redux';

import {
  RECEIVE_PLANETS_FAILURE,
  RECEIVE_PLANETS_SUCCESS,
  REQUEST_PLANETS,
  INPUT_TEXT,
} from '../actions';

const INITIAL_PLANET = {
  isFetching: false,
  data: [],
  error: '',
};

const planetReducer = (state = INITIAL_PLANET, action) => {
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

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
};

function filters(state = INITIAL_FILTER, action) {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        filterByName: { name: action.inputText },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  planetReducer,
  filters,
});

export default rootReducer;

// function emptyReducer() {
//   return {};
// }

// export default emptyReducer;
