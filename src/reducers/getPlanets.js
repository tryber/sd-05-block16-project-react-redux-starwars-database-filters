import {
  RECEIVE_PLANETS_FAILURE,
  RECEIVE_PLANETS_SUCCESS,
  REQUEST_PLANETS,
} from '../actions/fetchPlanetsApi';

const INITIAL_STATE = {
  isFetching: false,
  data: {},
};

const getPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.planets,
        isFetching: false,
      };
    case RECEIVE_PLANETS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default getPlanets;
