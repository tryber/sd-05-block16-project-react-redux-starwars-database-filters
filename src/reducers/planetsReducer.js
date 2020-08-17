import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA_SUCCESS,
  RECEIVE_API_DATA_FAILURE,
} from '../actions/index';

const INITIAL_API_STATE = {
  isFetching: false,
  data: [],
};

const planetsReducer = (state = INITIAL_API_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_API_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };

    case RECEIVE_API_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default planetsReducer;
