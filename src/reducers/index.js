import { combineReducers } from 'redux';
import { CHAMAR_API, SUCESSO_API, FILTRO_NOME } from '../actions';

// reducer estado inicial

const initialState = {
  data: [],
  isFetching: true,
};

function reducerApi(state = initialState, action) {
  switch (action.type) {
    case CHAMAR_API:
      return { ...state, isFetching: action.isFetching };
    case SUCESSO_API:
      return { ...state, isFetching: action.isFetching, data: action.data.results };
    default:
      return state;
  }
}

const initialFilters = {
  filterByName: {
    name: '',
  },
};

function filters(state = initialFilters, action) {
  switch (action.type) {
    case FILTRO_NOME:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
}

// combinação dos reducers a serem passados pra store

const rootReducer = combineReducers({
  reducerApi,
  filters,
});

export default rootReducer;
