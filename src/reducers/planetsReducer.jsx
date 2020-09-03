import { FETCHING_PLANETS, FETCHED_PLANETS, FAILED_TO_FETCH } from '../actions';

const INITIAL_STATE = {
  fetching: false,
  planetsData: [],
};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_PLANETS:
      return {
        ...state,
        fetching: true,
      };
    case FETCHED_PLANETS:
      return {
        ...state,
        planetsData: [...action.planetsData],
        fetching: false,
      };
    case FAILED_TO_FETCH:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    default:
      return state;
  }
};

export default planetsReducer;

/* Transparência: Plantão Inacio: spread operators used to copy the data already
in the state and objects and add the new information with the reducers.
project done with Sidnei and helped by Zambelli
*/
