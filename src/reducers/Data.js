import { REQUEST_PLANETS, FETCH_PLANETS, REQUEST_ERROR } from '../Actions';

const INITIAL_STATE = {
  planets: [],
  planetsColumns: [],
  isFetching: false,
  nextPage: '',
  previousPage: '',
  count: '',
  error: false,
};

function removingColumn(column, data) {
  const newData = [...data];
  function removeColum(item) {
    delete item.residents;
  }

  newData.forEach((item) => {
    removeColum(item);
  });
  return newData;
}

const fetchPlanets = (state, action) => {
  const newState = {
    ...state,
    // planets: [...removingColumn('residents', action.payload.results)],
    planets: [...action.payload.results],
    planetsColumns: [...Object.keys(action.payload.results[0])],
    nextPage: action.payload.next,
    previousPage: action.payload.previous,
    count: action.payload.count,
    isFetching: false,
  };
  return newState;
};

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case FETCH_PLANETS:
      return fetchPlanets(state, action);
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default data;
