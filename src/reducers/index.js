import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const IS_REQUESTING = 'IS_REQUESTING';

const isRequesting = () => ({
  type: IS_REQUESTING,
});

const initialState = {
  data: {},
  isfetching: false,
};

function handleAsyncFetch() {
  return (dispatch) => {
    dispatch(isRequesting());

    return fetch()
    .then
    ;
  };
}


function emptyReducer(state = initialState, action) {
  switch (action.type) {
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