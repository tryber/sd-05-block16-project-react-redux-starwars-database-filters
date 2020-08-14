import { combineReducers } from 'redux';
import { SEARCH_PLANET, SEARCH_SUCCESS, PLANET_NAME } from '../actions/index';

const initialState = {
  isLoading: false,
  data: '',
};

const initialFilter = {
  filterByName: {
    name: '',
  },
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
        data: action.planet[0],
      };
    default:
      return state;
  }
}

/* a função abaixo não havia feito, fui ao repositório do colega Rodrigo Batista,
para sanar umas dúvidas e vi que está função estava faltando */

function filters(state = initialFilter, action) {
  switch (action.type) {
    case PLANET_NAME:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ planetReducer, filters });

export default rootReducer;
