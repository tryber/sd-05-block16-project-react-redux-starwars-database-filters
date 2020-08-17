import {
  RECEIVE_PLANETS,
  RECEIVE_PLANETS_SUCCESS,
  RECEIVE_PLANETS_FAILED,
} from '../actions';

const INITIAL_STATE = {
  erro: false,
  planets: [],
  isFetching: false,
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const reducerPlanets = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_PLANETS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.payload,
        isFetching: false,
      };
    case RECEIVE_PLANETS_FAILED:
      return {
        ...state,
        planets: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducerPlanets;
