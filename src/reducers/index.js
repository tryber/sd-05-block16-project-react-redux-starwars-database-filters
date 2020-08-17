import { combineReducers } from 'redux';

const IS_REQUESTING = 'IS_REQUESTING';
const ADD_DATA = 'ADD_DATA';
const ADD_ERROR = 'ADD_ERROR';
const INPUT_TEXT = 'INPUT_TEXT';
const SUBMIT_FILTER = 'SUBMIT_FILTER';
const isRequesting = () => ({
  type: IS_REQUESTING,
});

const dataActionCreator = (json) => ({
  type: ADD_DATA,
  data: json,
});

const errorActionCreator = (error) => ({
  type: ADD_ERROR,
  error,
});

export const inputText = (input) => ({
  type: INPUT_TEXT,
  input,
});

export const submitFilter = (filtroNumerico) => ({
  type: SUBMIT_FILTER,
  filtroNumerico,
});

const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export function handleAsyncFetch() {
  return (dispatch) => {
    dispatch(isRequesting());

    return fetch(api)
      .then((response) => response.json())
      .then(
        (json) => dispatch(dataActionCreator(json.results)),
        (error) => dispatch(errorActionCreator(error)),
      );
  };
}

const initialStateFilter = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],

};

function filters(state = initialStateFilter, action) {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        filterByName: { name: action.input },
      };
    case SUBMIT_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          action.filtroNumerico,
        ],
      };

    default:
      return state;
  }
}

const initialState = {
  data: [],
  isfetching: false,
};

function requestReducer(state = initialState, action) {
  switch (action.type) {
    case IS_REQUESTING:
      return { ...state, isfetching: true };
    case ADD_DATA:
      return { ...state, data: action.data, isfetching: false };
    case ADD_ERROR:
      return { ...state, error: action.error, isfetching: false };
    default:
      return state;
  }
}

const reducer = combineReducers({ requestReducer, filters });
export default reducer;
