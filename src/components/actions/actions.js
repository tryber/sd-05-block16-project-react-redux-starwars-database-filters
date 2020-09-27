import fetchAPI from '../services/fetchAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVED_PLANETS_SUCCESS = 'RECEIVEID_PLANETS_SUCCESS';
export const RECEIVED_PLANETS_FAIL = 'RECEIVEID_PLANETS_FAIL';

function requestPlanets() {
  return { type: REQUEST_PLANETS };
}

function receivedPlanetsSuccess(data) {
  return { type: RECEIVED_PLANETS_SUCCESS, data };
}

function receivedPlanetsFail(error) {
  return { type: RECEIVED_PLANETS_FAIL, error };
}

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetchAPI()
      .then(
        (data) => dispatch(receivedPlanetsSuccess(data)),
        (error) => dispatch(receivedPlanetsFail(error.message)),
    );
  };
}
