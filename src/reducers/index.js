import { combineReducers } from 'redux';
import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_FAILURE, FILTER_NAME, FILTER_BY_NUMERIC, REPLACE_FILTERS } from '../actions';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: action.loading,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        data: action.results,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

const initialStateFilter = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = initialStateFilter, action) {
  switch (action.type) {
    case FILTER_NAME:
      return { ...state, filterByName: { name: action.inputText } };
    case FILTER_BY_NUMERIC:
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
    case REPLACE_FILTERS:
      return { ...state, filterByNumericValues: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ fetchReducer, filters });

export default rootReducer;
