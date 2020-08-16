import getPlanets from '../services/Api';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FETCH_DATA = 'FETCH_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const FILTER_BY_NUMERIC = 'FILTER_BY_NUMERIC';
export const REMOVE_FILTER = 'REMOVE_FILTER';

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

const filterByNumericValues = ({ column, comparison, value }) => ({
  type: FILTER_BY_NUMERIC,
  payload: { column, comparison, value },
});

const removeFilterByIndex = (index) => ({
  type: REMOVE_FILTER,
  index,
});

export {
  fetchData,
  filterByName,
  filterByNumericValues,
  removeFilterByIndex,
};
