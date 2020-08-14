export const REQUEST = 'REQUEST';
export const DATA = 'DATA';
export const FAIL = 'FAIL';
export const INPUT_NAME = 'INPUT_NAME';

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
// [HONESTIDADE ACADÊMICA]
// O seguinte thunk foi escrito consultando o exemplo guiado
// dos doguinhos, Trybe Course, 'React with Redux Part 2'.
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
    name: { input },
  };
};
