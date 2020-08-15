import { REQUEST_DATA, RECEIVE_DATA, RECEIVE_FAILURE } from '../actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: '',
};

const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return ({
        ...state,
        loading: true,
      });
    case RECEIVE_DATA:
      return ({
        ...state,
        data: action.data,
        loading: false,
      });
    case RECEIVE_FAILURE:
      return ({
        ...state,
        error: action.data,
      });
    default:
      return state;
  }
};

export default fetchReducer;
