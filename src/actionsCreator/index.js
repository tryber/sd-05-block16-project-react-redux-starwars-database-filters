import { getPlanets } from '../services/Api';

export const FETCH_DATA = 'FETCH_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

const getData = () => ({
  type: FETCH_DATA,
  loading: true,
});

const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  loading: false,
  payload: data,
});

const getDataFailed = (error) => ({
  type: GET_DATA_FAILED,
  loading: false,
  payload: [error],
});

export const fetchData = () => (dispatch) => {
  dispatch(getData());
  getPlanets()
    .then((res) => {
      dispatch(getDataSuccess(res));
    })
    .catch((err) => {
      dispatch(getDataFailed(err));
    });
};
