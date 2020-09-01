import {
  RECEIVED_PLANETS,
  REQUEST_PLANETS,
  FAILED_REQUEST,
} from '../actions';

export const INITIAL_STATE = {
  isFetching: false,
  data: [],
  status: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case RECEIVED_PLANETS:
      return { ...state, isFetching: false, data: action.data };
    case FAILED_REQUEST:
      return { ...state, isFetching: false, status: action.error };
    default:
      return state;
  }
}
export default reducer;
