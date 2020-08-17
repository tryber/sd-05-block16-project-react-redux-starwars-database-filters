import starWarsAPI from '../services/starWarsAPI';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FILTER_DATA = 'FILTER_DATA';
export const FILTER_COLUMN = 'FILTER_COLUMN';
export const DELETE_ITEM = 'DELETE_ITEM';

function requestData() {
  return {
    type: REQUEST_DATA,
  };
}

function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    payload: data.results,
  };
}

export function filterData(event) {
  return {
    type: FILTER_DATA,
    payload: event.target.value,
  };
}

export function filterNumericFields(column, comparison, value) {
  return {
    type: FILTER_COLUMN,
    column,
    comparison,
    value,
  };
}

export function deleteItemState(index) {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
}

export default function fetchStarWars() {
  return (dispatch) => {
    dispatch(requestData());
    return (starWarsAPI())
      .then((json) => dispatch(receiveData(json)));
  };
}
