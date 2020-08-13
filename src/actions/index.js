import getPlanets from '../service/planetsAPI';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const FILTER_PLANET = 'FILTER_PLANET';
export const FILTER_NUMBER = 'FILTER_NUMBER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const requestPlanets = () => ({
  type: REQUEST_DATA,
});

export const receivePlanets = (data) => ({
  type: RECEIVE_DATA,
  data,
});

export function fetchGetPlanet() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets().then((planets) => dispatch(receivePlanets(planets.results)));
  };
}

export const filterPlanet = (name) => ({
  type: FILTER_PLANET,
  name,
});

export const filterByNumericValues = (column, comparison, value) => ({
  type: FILTER_NUMBER,
  column,
  comparison,
  value,
});

export const removeFilter = (erased) => ({
  type: REMOVE_FILTER,
  erased,
});
