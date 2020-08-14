import { FETCH_PLANETS } from './types';

const fetchPlanets = () => (dispatch) => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: FETCH_PLANETS,
      payload: data.results,
    }),
  ));

export default fetchPlanets;
