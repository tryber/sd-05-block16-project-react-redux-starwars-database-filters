const REQUEST_DATA = 'REQUEST_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
// const FAILED_REQUEST = 'FAILED_REQUEST';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  // error: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
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
    // case FAILED_REQUEST:
    //   return {
    //     ...state,
    //     error: true,
    //   };
    default:
      return state;
  }
}