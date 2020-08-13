import fetchAPI from '../utilities/fetchAPI';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const SET_FILTER = 'SET_FILTER';
export const SET_VALUE = 'SET_VALUE';
export const SET_COMPARISON = 'SET_COMPARISON';
export const SET_COLUMN = 'SET_COLUMN';

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

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  payload: name,
});

export const setNewFilter = (column, comparison, value) => ({
  type: SET_FILTER,
  column,
  comparison,
  value,
});

export const setComparison = (comparison) => ({
  type: SET_COMPARISON,
  comparison,
});

export const setColumn = (column) => ({
  type: SET_COLUMN,
  column,
});

export const setValue = (value) => ({
  type: SET_VALUE,
  value,
});
