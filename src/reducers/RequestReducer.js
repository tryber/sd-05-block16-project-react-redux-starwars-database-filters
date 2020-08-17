import { REQUEST_LOADING, REQUEST_OK, REQUEST_FAILED } from '../actions';

const initialState = {
  result: '',
  loading: false,
  data: [],
};

function RequestReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_OK:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default RequestReducer;
