import getPlanets from '../services';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const RECEIVED_PLANETS = 'RECEIVED_PLANETS';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_COLUMN = 'FILTER_COLUMN';
export const FILTER_COMPARISON = 'FILTER_COMPARISON';
export const FILTER_VALUE = 'FILTER_VALUE';
export const FILTER_NUMBER = 'FILTER_NUMBER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const FILTER_BY_ORDER = 'FILTER_BY_ORDER';

export const requestPlanets = () => ({ type: REQUEST_PLANETS });

export const receivedPlanets = (data) => ({
  type: RECEIVED_PLANETS,
  data,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  status: error,
});

export const filterByName = (filter) => ({
  type: FILTER_BY_NAME,
  filter,
});

export const filterNumber = ({ column, comparison, value }) => ({
  type: FILTER_NUMBER,
  column,
  comparison,
  value,
});

export const removeFilter = (column) => ({
  type: REMOVE_FILTER,
  column,
});

export const filterByOrder = ({ column, sort }) => ({
  type: FILTER_BY_ORDER,
  column,
  sort,
});

export function fetchSWAPI() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets().then(
      (data) => dispatch(receivedPlanets(data.results)),
      (error) => dispatch(failedRequest(error)),
    );
  };
}
