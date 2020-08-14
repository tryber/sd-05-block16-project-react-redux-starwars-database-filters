import { FETCH_PLANETS, FETCH_RESOLVE, FETCH_REJECT } from './types';

function apiRequest() {
  return {
    type: FETCH_PLANETS,
  };
}

function apiResolve(data) {
  return {
    type: FETCH_RESOLVE,
    payload: data,
  };
}

function apiReject(error) {
  return {
    type: FETCH_REJECT,
    error,
  };
}

// React with Redux part 2 - Trybe Course
const fetchPlanets = () => (dispatch) => {
  dispatch(apiRequest());
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json()
      .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)),
    ))
    .then((data) => dispatch(apiResolve(data.results)),
    (error) => dispatch(apiReject(error)),
  );
};

export default fetchPlanets;
