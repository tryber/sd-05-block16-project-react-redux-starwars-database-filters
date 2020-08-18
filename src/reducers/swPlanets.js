import {
  REQUEST_PLANETS,
  REQUEST_PLANETS_FAILURE,
  REQUEST_PLANETS_SUCCESS,
} from '../actions';

const CHECK_FETCH = {
  isFetching: false,
  data: [],
};
const swPlanetss = (state = CHECK_FETCH, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_PLANETS_SUCCESS:
      return {
        ...state,
        data: action.data.results,
        isFetching: false,
      };
    case REQUEST_PLANETS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default swPlanetss;
