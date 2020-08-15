import {
  FETCH_DATA, GET_RESULTS, GET_ERROR, FILTER_BY_NUMERIC_VALUES, FILTER_BY_NAME,
} from './actions';

export const requestData = () => ({
  type: FETCH_DATA,
});

export const getResults = (data) => ({
  type: GET_RESULTS,
  payload: data,
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error,
});

export const filterByName = (findedPlanet, str) => ({
  type: FILTER_BY_NAME,
  payload: {
    name: str,
    filter: findedPlanet,
  },
});

export const filterByNumericValues = (target) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  payload: { target },
});
