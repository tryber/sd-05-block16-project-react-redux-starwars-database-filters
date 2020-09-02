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

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case FETCH_PLANETS:
      return {
        ...state,
        planets: [...action.payload.results],
        planetsColumns: [...Object.keys(action.payload.results[0])],
        nextPage: action.payload.next,
        previousPage: action.payload.previous,
        count: action.payload.count,
        isFetching: false,
      };
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

export default planetsReducer;
