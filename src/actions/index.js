import { planetAPI } from '../services/api';

export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECEIVE_API_DATA_SUCCESS = 'RECEIVE_API_DATA_SUCCESS';
export const RECEIVE_API_DATA_FAILURE = 'RECEIVE_API_DATA_FAILURE';

const requestAPIdata = () => ({
  type: REQUEST_API_DATA,
});

const receiveAPIdataSuccess = (data) => ({
  type: RECEIVE_API_DATA_SUCCESS,
  data,
});

const receiveAPIdataFailure = (error) => ({
  type: RECEIVE_API_DATA_FAILURE,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestAPIdata());

    planetAPI()
      .then(
        (planets) => dispatch(receiveAPIdataSuccess(planets)),
        (error) => dispatch(receiveAPIdataFailure(error)),
      );
  };
}
