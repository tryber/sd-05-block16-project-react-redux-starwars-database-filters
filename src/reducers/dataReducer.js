import { REQUEST_PLANETS, RECEIVE_PLANETS } from '../actions';

const initialState = {
  fetching: false,
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        fetching: true,
      };
    case RECEIVE_PLANETS:
      return {
        ...state,
        fetching: false,
        data: action.payload.results,
      };
    default:
      return state;
  }
};

export default dataReducer;
