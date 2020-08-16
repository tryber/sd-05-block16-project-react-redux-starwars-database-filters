import { FETCH_PLANETS } from './types';

function apiRequest(data) {
  return {
    type: FETCH_PLANETS,
    payload: data,
  };
}

const fetchPlanets = () => (dispatch) => {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then((data) => dispatch(apiRequest(data.results)),
  );
};

export default fetchPlanets;
