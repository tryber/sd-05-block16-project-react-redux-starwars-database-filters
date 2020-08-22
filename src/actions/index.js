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

const receivePlanetsSuccess = ({ results }) => ({
  type: RECEIVE_PLANETS_SUCCESS,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets()
      .then(
        (results) => dispatch(receivePlanetsSuccess(results)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}
