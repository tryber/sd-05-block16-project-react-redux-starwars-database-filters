// Referências: aula ao vivo 16.4 e Juliette: https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/tree/juliette-react-redux-starwars-datatable-filters

import getPlanets from '../service/planetsAPI';

export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const INPUT_TEXT = 'INPUT_TEXT';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
  isFetching: true,
});

const receivePlanetsFailure = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  isFetching: false,
  error,
});

const receivePlanetsSuccess = (data) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  isFetching: false,
  data: data.results,
});

// const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

// export function fetchPlanets() {
//   return (dispatch) => {
//     dispatch(requestPlanets());
//     return fetch(PLANETS_API)
//       .then((response) => response.json())
//       .then(
//         (data) => {
//           console.log(data.results);
//           return dispatch(receivePlanetsSuccess(data.results));
//         },
//         (error) => dispatch(receivePlanetsFailure(error)),
//       );
//   };
// }

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets()
      .then(
        (results) => dispatch(receivePlanetsSuccess(results)),
        (error) => dispatch(receivePlanetsFailure(error)),
      );
  };
}
console.log(getPlanets());

export function filterByName(inputText) {
  return {
    type: INPUT_TEXT,
    inputText,
  };
}
