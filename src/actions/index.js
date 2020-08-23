// Referência: aula ao vivo 16.4

import { getPlanets } from '../service/planetsAPI';

export const RECEIVE_PLANETS_FAILURE = 'RECEIVE_PLANETS_FAILURE';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanetsFailure = (error) => ({
  type: RECEIVE_PLANETS_FAILURE,
  error,
});

const receivePlanetsSuccess = (data) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  data,
});

const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetch(PLANETS_API)
      .then((response) => response.json())
      .then(
        (json) => {
          console.log(json.results);
          return dispatch(receivePlanetsSuccess(json.results));
        },
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}

// export function fetchPlanets() {
//   return (dispatch) => {
//     dispatch(requestPlanets());

//     return getPlanets()
//       .then(
//         (results) => dispatch(receivePlanetsSuccess(results)),
//         (error) => dispatch(receivePlanetsFailure(error.message)),
//       );
//   };
// }
