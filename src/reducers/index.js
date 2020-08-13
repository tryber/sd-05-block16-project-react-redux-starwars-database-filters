import { REQUEST, DATA, FAIL} from '../actions';

const initialState = {
  fetching: false,
  data: [],
}

function planetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, fetching: true };
    case DATA:
      return { ...state, fetching: false, data: action.data };
    case FAIL:
      return { ...state, fetching: false, error: action.err };
    default:
      return state;
  }
}

export default planetReducer;
