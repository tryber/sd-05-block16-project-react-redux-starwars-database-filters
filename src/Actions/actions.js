const APPLY_FILTER = 'UPDATEFILTER';
const REQUEST = 'REQUEST';
const REQUEST_SUCESS = 'REQUEST_SUCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';
const FILTER_SELECTION = 'SELECTION';
const FILTER_REPLACEMENT = 'FILTER_REPLACEMENT';
const HEAD_DATA = 'HEAD_DATA';
const ORDENATION = 'ORDENATION';
const Actions = {
  APPLY_FILTER,
  REQUEST,
  REQUEST_SUCESS,
  REQUEST_FAIL,
  FILTER_SELECTION,
  FILTER_REPLACEMENT,
  HEAD_DATA,
  ORDENATION,
};

export function updateFilter(payload) {
  return {
    type: APPLY_FILTER,
    filter: payload,
  };
}

function Request() {
  return {
    type: REQUEST,
    isLoading: true,
  };
}

function requestSucess(payload) {
  return {
    type: REQUEST_SUCESS,
    payload,
    isLoading: false,
  };
}

function requestFail(payload) {
  return {
    type: REQUEST_FAIL,
    payload,
    isLoading: false,
  };
}
export function headerOrder(payload) {
  return {
    type: ORDENATION,
    payload,
  };
}

export function headerData(payload) {
  return {
    type: HEAD_DATA,
    payload,
  };
}
function small(data) {
  const planets = data.results.map((e) => {
    delete e.residents;
    const t = { ...e };
    return t;
  });
  return Object.entries(planets[0]).map((e) => e[0]);
}

export function getAPI() {
  return (dispatch) => {
    dispatch(Request());
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    return fetch(`${url}`)
      .then((resp) => resp.json()
        .then((e) => {
          dispatch(requestSucess(e));
          return e;
        },
        )
        .then((e) => dispatch(headerData(small(e))))
        .catch((e) => dispatch(requestFail(e))));
  };
}
export function selectionFilter(payload) {
  return {
    type: FILTER_SELECTION,
    payload,
  };
}
export function replaceFilters(payload) {
  return {
    type: FILTER_REPLACEMENT,
    payload,
  };
}

export default Actions;
