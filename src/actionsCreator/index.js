import getPlanets from '../services/Api';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
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

const fetchData = () => (dispatch) => {
  dispatch(getData());
  getPlanets()
    .then((res) => {
      dispatch(getDataSuccess(res));
    })
    .catch((err) => {
      dispatch(getDataFailed(err));
    });
};

const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export {
  fetchData,
  filterByName,
}
