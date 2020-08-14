import { FETCH_PLANETS } from '../actions/types';

const initialState = {
  textInput: '',
  data: [],
  isLoading: true,
};

const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default planetReducer;
