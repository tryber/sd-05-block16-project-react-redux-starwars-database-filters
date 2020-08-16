import {
  FETCH_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC,
  REMOVE_FILTER,
} from '../actionsCreator';

const INITIAL_PLANET_STATE = {
  loading: false,
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
  },
  data: [],
};

export default function planetsReducer(state = INITIAL_PLANET_STATE, action) {
  const { filters } = state;
  const fNumVals = [...filters.filterByNumericValues];

  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filters: { ...filters, filterByName: { name: action.name } } };

    case FILTER_BY_NUMERIC:
      // Aqui preciso verificar se adiciono ou removo o filtro
      fNumVals.push(action.payload);
      // Aqui integro o novo array no state
      return { ...state, filters: { ...filters, filterByNumericValues: fNumVals } };

    case REMOVE_FILTER:
      fNumVals.splice(action.index, 1);
      return {
        ...state,
        filters: { ...filters, filterByNumericValues: fNumVals },
      };

    case FETCH_DATA:
      return { ...state, loading: true };

    case GET_DATA_SUCCESS:
    case GET_DATA_FAILED:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
}
