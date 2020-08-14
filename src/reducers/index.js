import { SEARCH_PLANET, SEARCH_SUCCESS } from '../actions/index';

const initialState = {
  isLoading: false,
  character: '',
};

function planetReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PLANET:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      };
    default:
      return state;
  }
}

export default planetReducer;
