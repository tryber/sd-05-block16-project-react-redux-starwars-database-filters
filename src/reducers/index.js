import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const IS_REQUESTING = 'IS_REQUESTING';
const ADD_DATA = 'ADD_DATA';
const ADD_ERROR = 'ADD_ERROR';

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


const initialState = {
  data: [],
  isfetching: false,
};

const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

export function handleAsyncFetch(extension) {
  return (dispatch) => {
    dispatch(isRequesting());

    return fetch(api)
      .then((response) => response.json())
      .then(
        (json) => {
          console.log(json.results);
          return dispatch(dataActionCreator(json.results));
        },
        (error) => {
          console.log('ta tudo errado: ' + error);
          dispatch(errorActionCreator(error));
        },
      );
  };
}

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case IS_REQUESTING:
      return { ...state, isfetching: true}
    case ADD_DATA:
      return { ...state, data: action.data, isfetching: false };
    case ADD_ERROR:
      return { ...state, error: action.error, isfetching: false };

    default:
      return state;
  }
}
const rootReducer = combineReducers({ emptyReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// export function thunkCharacter(name) {
//   return (dispatch) => {
//     dispatch(isRequesting(name));
//     return charAPI(name)
//       .then(
//         (character) => dispatch(searchSuccess(character)),
//         (error) => dispatch(searchFailure(error.message)),
//       );
//   };
// };

// export const charAPI = () => (
//   fetch(`${ISS_BASE_API}/iss-now.json`)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//     ))
// );
