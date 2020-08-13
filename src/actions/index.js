import fetchAPI from '../utilities/fetchAPI';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const receivePlanets = (payload) => ({
  type: RECEIVE_PLANETS,
  payload,
});

export const fetchPlanets = () => (dispatch) => {
  dispatch(requestPlanets());
  return fetchAPI().then((data) => dispatch(receivePlanets(data)));
};
