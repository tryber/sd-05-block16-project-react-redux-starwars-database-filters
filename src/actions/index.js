export const REQUEST = 'REQUEST';
export const DATA = 'DATA';
export const FAIL = 'FAIL';
export const INPUT_NAME = 'INPUT_NAME';
export const SELECT_NUMBER = 'SELECT_NUMBER';
export const CANCEL_FILTER = 'CANCEL_FILTER';

export function requestAction() {
  return {
    type: REQUEST,
  };
}

export function successDataAction(data) {
  return {
    type: DATA,
    data,
  };
}

export function failAction(err) {
  return {
    type: FAIL,
    err,
  };
}

const apiPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
// [HA] - Modelo (Trybe Course, 'React with Redux Part 2', Doguinhos).
export function fetchPlanetsThunk() {
  return (dispatch) => {
    dispatch(requestAction());
    return fetch(apiPlanets)
      .then((response) => response.json())
      .then(
        (json) => {
          console.log(json.results);
          return dispatch(successDataAction(json.results));
        },
        (error) => dispatch(failAction(error.message)),
      );
  };
}

export function filterNameAction(input) {
  return {
    type: INPUT_NAME,
    input,
  };
}

export function filterNumberAction(col, comp, v) {
  // console.log('received in action: ' + column, comparison, value);
  return {
    type: SELECT_NUMBER,
    col,
    comp,
    v,
  };
}

export function cancelFilterAction(i) {
  return {
    type: CANCEL_FILTER,
    i,
  };
}
