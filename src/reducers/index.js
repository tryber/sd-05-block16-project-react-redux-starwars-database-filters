import { combineReducers } from 'redux';
import { REQUEST, DATA, FAIL, INPUT_NAME } from '../actions';

const initialState = {
  fetching: false,
  data: [],
  error: '',
};

function planetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, fetching: true };
    case DATA:
      return { ...state, fetching: false, data: action.data };
    case FAIL:
      return { ...state, fetching: false, error: action.err };
    default:
      return state;
  }
}

const initialStateInput = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function filterNameReducer(state = initialStateInput, action) {
  switch (action.type) {
    case INPUT_NAME:
      console.log(action.input);
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { name: action.input },
        },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ planetReducer, filterNameReducer });

export default rootReducer;
