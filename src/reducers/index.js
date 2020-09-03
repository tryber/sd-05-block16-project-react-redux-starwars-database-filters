import { combineReducers } from 'redux';

import {
  RECEIVE_PLANETS_FAILURE,
  RECEIVE_PLANETS_SUCCESS,
  REQUEST_PLANETS,
  INPUT_TEXT,
  INPUT_NUMBER,
  DELETE_FILTERS,
  SORT_PLANETS,
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
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function filters(state = INITIAL_FILTER, action) {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        filterByName: { name: action.inputText },
      };
    case INPUT_NUMBER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case DELETE_FILTERS:
      return {
        ...state,
        filterByNumericValues: [...action.cleanedFilter],
      };
    case SORT_PLANETS:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
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
