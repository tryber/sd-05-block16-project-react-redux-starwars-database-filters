// Referencia:
// https://github.com/tryber/sd-05-live-lectures/blob/react-redux-pt2/iss/src/actions/index.js

import api from '../service/api';

export const PLANET_LIST_REQUEST_SUCCESS = 'PLANET_LIST_REQUEST_SUCCESS';
export const PLANET_LIST_REQUEST_FAILURE = 'PLANET_LIST_REQUEST_FAILURE';
export const PLANET_LIST_REQUEST = 'PLANET_LIST_REQUEST';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUE = 'FILTER_BY_NUMERIC_VALUE';

const requestPlanetList = () => ({
  type: PLANET_LIST_REQUEST,
});

const requestPlanetListFailed = (error) => ({
  type: PLANET_LIST_REQUEST_FAILURE,
  error: error.detail,
});

const requestPlanetListSucceed = (data) => ({
  type: PLANET_LIST_REQUEST_SUCCESS,
  data,
});

export const filterPlanetsByName = (filteredName) => ({
  type: FILTER_BY_NAME,
  filteredName,
});

export const filterPlanetsByNumericValue = ({ column, comparison, value }) => ({
  type: FILTER_BY_NUMERIC_VALUE,
  column,
  comparison,
  value,
});

export function fetchPlanetList() {
  return (dispatch) => {
    dispatch(requestPlanetList());
    return api().then((response) => dispatch(requestPlanetListSucceed(response.results)))
            .catch((error) => dispatch(requestPlanetListFailed(error)));
  };
}
