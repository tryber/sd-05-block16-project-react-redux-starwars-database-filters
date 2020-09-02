import {
  PLANETS_REQUEST_FAILURE,
  PLANETS_REQUEST_SUCCESS,
  PLANETS_REQUEST,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const reducerPlanets = (state = INITIAL_STATE, action) => {
  console.log('received action:', action);

  switch (action.type) {
    case PLANETS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case PLANETS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case PLANETS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducerPlanets;
