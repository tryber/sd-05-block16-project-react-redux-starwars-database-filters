import { REQUEST_API, REQUEST_API_SUCESS, REQUEST_API_FAILED } from '../actions/actionAPI';

const INITIAL_STATE = {
  isFetching: false,
};

export default function planets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: action.payload,
      };
    case REQUEST_API_SUCESS:
      return {
        ...state,
        results: action.payload,
        isFetching: false,
      };
    case REQUEST_API_FAILED:
      return {
        ...state,
        results: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
