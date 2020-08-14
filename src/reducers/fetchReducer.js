import { FETCH_DATA, GET_ERROR, GET_RESULTS } from './actions';
// import { results } from '../testData';


// estrutura inicial montada e nao utilizada
// export const mainReducer = combineReducers({
//   reducer1,
//   reducer2,
// });

const initialState = {
  data: [],
  error: '',
  isFetching: false,
};

function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case GET_RESULTS:
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default fetchReducer;
