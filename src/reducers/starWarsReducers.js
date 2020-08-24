import { RECEIVE_SW_FAILURE, RECEIVE_SW_SUCCESS, REQUEST_SW } from '../actions';

const INITIALSTATE = {
  isFetching: false,
};

const starWaresReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case REQUEST_SW:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SW_SUCCESS:
      return {
        ...state,
        planets: action.planets,
        isFetching: false,
      };
    case RECEIVE_SW_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default starWaresReducer;
