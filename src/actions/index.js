import starWarsAPI from '../services/starWarsAPI';

const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
// const FAILED_REQUEST = 'FAILED_REQUEST';

function request_Data() {
  return {
    type: REQUEST_DATA,
  };
}

function receive_Data(data) {
  return {
    type: RECEIVE_DATA,
    payload: data.results,
  };
}

export default function fetchStarWars() {
  return (dispatch) => {
    dispatch(request_Data());
    return (starWarsAPI())
      .then((json) => dispatch(receive_Data(json)));
  }
}
