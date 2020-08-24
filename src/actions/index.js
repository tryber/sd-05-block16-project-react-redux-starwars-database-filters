import planetAPI from '../services/api';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA_SUCCESS = 'RECEIVE_API_DATA_SUCCESS';
export const RECEIVE_API_DATA_FAILURE = 'RECEIVE_API_DATA_FAILURE';
export const FILTER_NAME = 'FILTER_NAME';

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
