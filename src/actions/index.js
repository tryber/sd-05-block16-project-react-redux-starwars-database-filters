import getPlanets from '../services/data';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';
export const SEARCH_FILTER = 'SEARCH_FILTER';
export const NUMBER_FILTER = 'NUMBER_FILTER';
export const COLUMN_FILTER = 'COLUMN_FILTER';
export const OPERATION_FILTER = 'OPERATION_FILTER';
export const TOTAL_FILTER = 'TOTAL_FILTER';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const requestPlanetsSuccess = (results) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data: results,
});

const requestPlanetsFailure = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error,
});

export function searchFilter(string) {
  return {
    type: SEARCH_FILTER,
    payload: string,
  };
}
export function totalFilter(column, comparison, value) {
  return {
    type: TOTAL_FILTER,
    payload: {
      value,
      comparison,
      column,
    },
  };
}
export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets().then(
      (results) => dispatch(requestPlanetsSuccess(results)),
      (error) => dispatch(requestPlanetsFailure(error.message)),
    );
  };
}
