import { REQUEST_DATA, RECEIVE_DATA } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
