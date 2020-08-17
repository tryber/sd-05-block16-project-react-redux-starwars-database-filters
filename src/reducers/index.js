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
      // console.log(action.input);
      return {
        ...state,
        filterByName: {
          ...state.filterByName,
          name: action.input,
        },
      };
    case SELECT_NUMBER:
      // console.log('received in reducer: ' + action.column, action.comparison, action.value);
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
    case CANCEL_FILTER:
      return {
        ...state,
        filterByNumericValues : [ 
        ...state.filterByNumericValues.slice(0, action.index),
        ...state.filterByNumericValues.slice(action.index + 1, state.filterByNumericValues.length),
        ]
      }
    default:
      return state;
  }
}

// [HA]{R5} - Ajuda. (slice, Paulo Dandrea, PR https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/pull/17/files).

const rootReducer = combineReducers({ planetReducer, filters });

export default rootReducer;
