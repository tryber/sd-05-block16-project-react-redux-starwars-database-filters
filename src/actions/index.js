import getCurrentSW from '../services/API';

export const RECEIVE_SW_FAILURE = 'RECEIVE_SW_FAILURE';
export const RECEIVE_SW_SUCCESS = 'RECEIVE_SW_SUCCESS';
export const REQUEST_SW = 'REQUEST_SW';

const requestSW = () => ({
  type: REQUEST_SW,
});

const receiveSWFailure = (error) => ({
  type: RECEIVE_SW_FAILURE,
  error,
});

const receiveSWSuccess = (planets) => ({
  type: RECEIVE_SW_SUCCESS,
  planets,
});

export function fechStarWars() {
  return (dispath) => {
    dispath(requestSW());

    return getCurrentSW()
      .then(
        (results) => dispath(receiveSWSuccess(results.results)))
      .catch(
        (error) => dispath(receiveSWFailure(error.message)));
  };
}

export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const filterByName = (name) => ({
  type: 'FILTER_BY_NAME',
  name,
});

export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

export const filterByNumericValues = (column, comparison, value) => ({
  type: 'FILTER_BY_NUMERIC_VALUES',
  column,
  comparison,
  value,
});

export const CLEAR_FILTER = 'CLEAR_FILTER';

export const clearFilter = (column) => ({
  type: 'CLEAR_FILTER',
  column,
});
