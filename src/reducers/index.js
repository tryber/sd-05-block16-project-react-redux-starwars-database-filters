import { combineReducers } from 'redux';
import {
  CALL_API,
  RECEIVED_API,
  FILTER_PLANET,
  FILTER_GENERAL,
  REMOVE_FILTER,
} from '../actions';

// ANCHOR planetsReducer
const INITIAL_STATE_PLANET = {
  isFetching: false,
  planets: [],
};

const planetsReducer = (state = INITIAL_STATE_PLANET, action) => {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_API:
      return {
        ...state,
        isFetching: false,
        planets: action.planets,
      };
    default:
      return state;
  }
};

// ANCHOR filters
const INITIAL_STATE_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Surface_Water',
    sort: 'ASC',
  },
  ordenar: true
};

const filters = (state = INITIAL_STATE_FILTER, action) => {
  switch (action.type) {
    case FILTER_PLANET:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_GENERAL:
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
        filterByNumericValues: action.arr,
      };
    default:
      return state;
  }
};

// ANCHOR rootReducer
const rootReducer = combineReducers({
  planetsReducer,
  filters,
});

export default rootReducer;
