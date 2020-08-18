export const REQUEST_API = 'REQUEST_API';
export const GET_PLANETS = 'GET_PLANNETS';
export const QUERY_FORM = 'QUERY_FORM';
export const QUERY_SELECTOR = 'QUERY_SELECTOR';
export const DELETE_FILTER = 'DELETE_FILTER';
export const SET_ORDER = 'SET_ORDER';

const requestAPI = () => ({
  type: REQUEST_API,
});

const getPlanets = (payload) => ({
  type: GET_PLANETS,
  payload,
});

export const queryForm = (name) => ({
  type: QUERY_FORM,
  name,
});

export const deleteFilter = (newFilter) => ({
  type: DELETE_FILTER,
  newFilter,
});

export const querySelector = ({ column, comparison, value }) => ({
  type: QUERY_SELECTOR,
  column,
  comparison,
  value,
});

export const setOrder = (column, order) => ({
  type: SET_ORDER,
  column,
  order,
});

export function fetchPlannets() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
      .then((response) => response.json()
      .then(
        (data) => dispatch(getPlanets(data.results)),
      ));
  };
}
