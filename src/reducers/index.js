import { combineReducers } from 'redux';
import {
  REQUEST_PLANETS,
  GET_PLANETS,
  BY_NAME,
  BY_NUMBERS,
  SET_FILTERED,
  REMOVE_FILTER,
} from '../actions';

const INITIAL_API_STATE = {
  isFetching: false,
  data: [],
};

const INITIAL_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
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
    case BY_NUMBERS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
      case REMOVE_FILTER:
        return {
          ...state,
          filterByNumericValues: [
            ...action.newFilters,
          ],
        };
    default:
      return state;
  }
}

function setFiltered(state = [], action) {
  switch (action.type) {
    case SET_FILTERED:
      return [...action.planets];
    default:
      return state;
  }
}

const rootReducer = combineReducers({ APIreducer, filters, setFiltered });

export default rootReducer;
