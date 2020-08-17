import { combineReducers } from 'redux';
import { REQUEST, DATA, FAIL, INPUT_NAME, SELECT_NUMBER, CANCEL_FILTER } from '../actions';

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
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    // {
    //   column: '',
    //   comparison: '',
    //   value: '',
    // },
  ],
};

function filters(state = initialStateInput, action) {
  switch (action.type) {
    case INPUT_NAME:
      return {
        ...state,
        filterByName: { ...state.filterByName, name: action.input },
      };
    case SELECT_NUMBER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.col, comparison: action.comp, value: action.v },
        ],
      };
    case CANCEL_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.slice(0, action.i),
          ...state.filterByNumericValues.slice(action.i + 1, state.filterByNumericValues.length),
        ],
      };
    default:
      return state;
  }
}

// [HA]{R5} - Ajuda. (slice, Paulo Dandrea, PR https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/pull/17/files).

const rootReducer = combineReducers({ planetReducer, filters });

export default rootReducer;
