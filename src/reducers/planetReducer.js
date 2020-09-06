import {
  PLANETS_REQUEST_SUCCESS,
  PLANETS_REQUEST,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  cabecalho: [],
};

const reducerPlanets = (state = INITIAL_STATE, action) => {
  let header;

  switch (action.type) {
    case PLANETS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case PLANETS_REQUEST_SUCCESS:
      header = Object.keys(action.payload[0]);
      return {
        ...state,
        cabecalho: header.filter((titulo) => (titulo !== 'residents')),
        data: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducerPlanets;
