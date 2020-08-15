import fetchAPI from '../services/swapiAPI';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_FAILURE = 'RECEIVE_FAILURE';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data,
});

const receiveFailure = (error) => ({
  type: RECEIVE_FAILURE,
  data: error,
});

const fetchData = () => (
    (dispatch) => {
      dispatch(requestData());
      return fetchAPI()
      .then((data) => dispatch(receiveData(data.results)))
      .catch((error) => dispatch(receiveFailure(error)));
    }
  );

export default fetchData;
