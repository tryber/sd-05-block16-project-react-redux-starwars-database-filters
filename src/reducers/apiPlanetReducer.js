import {
  REQUEST_PLANETS_API,
  RECEIVE_PLANETS_API,
} from '../actions/actionApi';

const INITIAL_PLANETS_API = {
  isFetching: true,
  batatinhaResults: [],
};

const apiPlanet = (state = INITIAL_PLANETS_API, action) => {
  // console.log(action, state)
  switch (action.type) {
    case REQUEST_PLANETS_API:
      return {
        ...state,
        isFetching: action.isBatatinha,
        // isBatatinha -> actionApi.js | export isFetching to Table.js
      };
    case RECEIVE_PLANETS_API:
      return {
        ...state,
        batatinhaResults: action.results,
        isFetching: false,
      };
    default:
      return state;
  }
};

// state: é o estado anterior ou o estado inicial da aplicação;
// action: a ação realizada (o clique, a digitação, a seleção de uma opção, etc. )

export default apiPlanet;
