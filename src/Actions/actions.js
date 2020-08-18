const APPLY_FILTER = 'UPDATEFILTER';
const REQUEST = 'REQUEST';
const REQUEST_SUCESS = 'REQUEST_SUCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';

const Actions = { APPLY_FILTER, REQUEST, REQUEST_SUCESS, REQUEST_FAIL }

export function updateFilter(payload) {
  return {
    type: APPLY_FILTER,
    filter: payload,
  }
}

function Request() {
  return {
    type: REQUEST,
    isLoading: true,
  }
}

function Request_Sucess(payload) {
  return {
    type: REQUEST_SUCESS,
    payload,
    isLoading: false,
  }
}

function Request_Fail(payload) {
  return {
    type: REQUEST_FAIL,
    payload,
    isLoading: false,
  }
}

export function getAPI() {
  return (dispatch) => {
    dispatch(Request())
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    return fetch(`${url}`)
      .then(resp => resp.json()
        .then(e => dispatch(Request_Sucess(e)))
        .catch(e => dispatch(Request_Fail(e))))
  }
}


export default Actions;