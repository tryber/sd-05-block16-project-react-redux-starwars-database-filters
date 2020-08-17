import {
  FETCH_DATA,
  GET_RESULTS,
  GET_ERROR,
  FILTER_BY_NUMERIC_VALUES,
  FILTER_BY_NAME,
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

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  // payload: name,
  payload: {
    name,
  },
// nessa aqui o PR do Felipe me ajudou a descubrir um erro no codigo
});

export const filterByNumericValues = (target) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  payload: { target },
});
