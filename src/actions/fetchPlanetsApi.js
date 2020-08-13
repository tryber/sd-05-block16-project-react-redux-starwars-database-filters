import getStarWarsPlanets from '../services/starWarsAPI';

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

const receivePlanetsSuccess = (planets) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  planets,
});

export function fetchStarWarsPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getStarWarsPlanets()
      .then(
        (planets) => dispatch(receivePlanetsSuccess(planets)),
        (error) => dispatch(receivePlanetsFailure(error.message)),
      );
  };
}
