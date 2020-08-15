export const REQUEST_PLANETS = 'REQUEST_MOVIES';
export const GET_PLANETS = 'GET_PLANETS';
export const BY_NAME = 'BY_NAME';
export const BY_NUMBERS = 'BY_NUMBERS';
export const SET_FILTERED = 'SET_FILTERED';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ORDER_COLUMN = 'ORDER_COLUMN';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

export const getPlanets = (planets) => ({
  type: GET_PLANETS,
  planets,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
      .then((response) => response.json())
      .then((data) => dispatch(getPlanets(data)));
  };
}

export const filterByName = (name) => ({
  type: BY_NAME,
  name,
});

export const filterByNumericValues = ({ column, comparison, value }) => ({
  type: BY_NUMBERS,
  column,
  comparison,
  value,
});

export const removeFilter = (newFilters) => ({
  type: REMOVE_FILTER,
  newFilters,
});

export const setOrder = (column, order) => ({
  type: ORDER_COLUMN,
  column,
  order,
});
