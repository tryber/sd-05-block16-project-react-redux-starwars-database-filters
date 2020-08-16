import { FETCH_PLANETS } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
      };

    default:
      return state;
  }
};

export default planetReducer;
