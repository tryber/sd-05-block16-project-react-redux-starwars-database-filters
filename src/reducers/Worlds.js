import {
  REQUEST_STARWARS,
  RECEIVE_STARWARS_SUCCESS,
  RECEIVE_STARWARS_FAILURE,
} from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  error: '',
};

const starWars = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARWARS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_STARWARS_SUCCESS:
      return {
        ...state,
        data: action.data.results,
        isFetching: false,
      };
    case RECEIVE_STARWARS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default starWars;
