import {
  FETCH_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  FILTER_BY_NAME,
} from '../actionsCreator';

const INITIAL_PLANET_STATE = {
  loading: false,
  filters: { filterByName: {name: ''} },
  data: [],
};

export default function planetsReducer(state = INITIAL_PLANET_STATE, action) {
  const { filters } = state;
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filters: { ...filters, filterByName: { name: action.name } } };
    case FETCH_DATA:
      return { ...state, loading: true };

    case GET_DATA_SUCCESS:
    case GET_DATA_FAILED:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
}
