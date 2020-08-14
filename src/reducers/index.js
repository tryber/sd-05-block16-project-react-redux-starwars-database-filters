import { combineReducers } from 'redux';
import filters from './filters';

const IS_FETCHING = 'IS_FETCHING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const isFetching = () => ({
  type: IS_FETCHING,
});

const fetchDataActionCreator = (json) => ({
  type: FETCH_SUCCESS,
  data: json,
});

const fetchErrorActionCreator = (error) => ({
  type: FETCH_ERROR,
  error,
});

const initialState = {
  data: [],
  isfetching: false,
};

const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

export function handleGoFetch() {
  return (dispatch) => {
    dispatch(isFetching());

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        return dispatch(fetchDataActionCreator(json.results));
      },
        (error) => {
          console.log(`erro: ${error.message}`);
          dispatch(fetchErrorActionCreator(error));
        },
      );
  };
}

export function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isfetching: true };
    case FETCH_SUCCESS:
      return { ...state, data: action.data, isfetching: false };
    case FETCH_ERROR:
      return { ...state, error: action.error, isfetching: false };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ fetchReducer, filters });
export default rootReducer;

// Disscussed and did some pair programing with Paulo D'Andrea on this code
// For the thunk used/got inspired by "doguinho app" and "game of thrones App" of the TrybeCourse