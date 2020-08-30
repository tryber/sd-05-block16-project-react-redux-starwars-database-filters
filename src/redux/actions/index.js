import axios from 'axios';

const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const PLANETS_REQUEST_FAILURE = 'PLANETS_REQUEST_FAILURE';
export const PLANETS_REQUEST_SUCCESS = 'PLANETS_REQUEST_SUCCESS';
export const PLANETS_REQUEST = 'PLANETS_REQUEST';

const requestPlanets = () => ({
  type: PLANETS_REQUEST,
});

const requestPlanetsFailure = (error) => ({
  type: PLANETS_REQUEST_FAILURE,
  error,
});

const requestPlanetsSuccess = (planets) => ({
  type: PLANETS_REQUEST_SUCCESS,
  payload: planets,
});

export function fetchActionPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return axios.get(PLANET_API)
      .then(
        (response) => dispatch(requestPlanetsSuccess(response.data)),
        (erro) => dispatch(requestPlanetsFailure(erro)),
      )
  }
}