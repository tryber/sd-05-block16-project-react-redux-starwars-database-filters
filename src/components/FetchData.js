import { requestData, getResults, getError } from '../reducers/createActions'
// import { createStore, applyMiddleware, combineReducers } from 'redux';


export default function fetchData() {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then(
        // (result) => console.log(result.results),
        (obj) => dispatch(getResults(obj.results)),
      )
      .catch((error) => dispatch(getError(error)));
  };
}
