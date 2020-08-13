import { RECEIVE_DATA, REQUEST_DATA } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  // console.log('received action: ', action);
  // const { data } = state;
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DATA:
      // return { ...state, data: [...data, action.payload] };
      return {
        ...state,
        data: [...action.data],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
