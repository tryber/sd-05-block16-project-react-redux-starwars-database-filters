import {
  FETCH_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from '../actionsCreator';

const INITIAL_PLANET_STATE = {
  loading: false,
  data: [],
};

export default function planetsReducer(state = INITIAL_PLANET_STATE, action) {
  switch (action.type){
    case FETCH_DATA:
      return { ...state, loading: true };

    case GET_DATA_SUCCESS:
    case GET_DATA_FAILED:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
}
