import { combineReducers } from 'redux';
import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_FAILURE, FILTER_NAME } from '../actions';

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
};

function filters(state = initialStateFilter, action) {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: {
          name: action.inputText,
        },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ fetchReducer, filters });

export default rootReducer;
