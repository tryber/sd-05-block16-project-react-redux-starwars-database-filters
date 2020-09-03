import planetAPI from '../services/api';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA_SUCCESS = 'RECEIVE_API_DATA_SUCCESS';
export const RECEIVE_API_DATA_FAILURE = 'RECEIVE_API_DATA_FAILURE';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_VALUES = 'FILTER_VALUES';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const FILTER_SORT = 'FILTER_SORT';

const requestAPIdata = () => ({
  type: REQUEST_API_DATA,
});

const receiveAPIdataSuccess = (data) => ({
  type: RECEIVE_API_DATA_SUCCESS,
  data: data.results,
});

const receiveAPIdataFailure = (error) => ({
  type: RECEIVE_API_DATA_FAILURE,
  error,
});

export const filterName = (name) => ({
  type: FILTER_NAME,
  name,
});

export const filterValues = ({ column, comparison, value }) => ({
  type: FILTER_VALUES,
  column,
  comparison,
  value,
});

export const removeFilter = (column) => ({
  type: REMOVE_FILTER,
  column,
});

export const filterSort = ({ column, sort }) => ({
  type: FILTER_SORT,
  column,
  sort,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestAPIdata());

    planetAPI()
      .then(
        (data) => dispatch(receiveAPIdataSuccess(data)),
        (error) => dispatch(receiveAPIdataFailure(error)),
      );
  };
}
