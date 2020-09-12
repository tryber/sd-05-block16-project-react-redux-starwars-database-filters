import { combineReducers } from 'redux';
import {
  CHAMAR_API,
  SUCESSO_API,
  FILTRO_NOME,
  FILTRO_NUMEROS,
  INICIA_FILTROS,
  REMOVE_FILTRO,
  ORDENA_FILTRO,
  // iniciaFiltros,
} from '../actions';

// reducer estado inicial
const initialState = {
  data: [],
  isFetching: true,
};
// Função que renderiza API com 2 cases: Um chama dados e outro que já chamou com sucesso
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
// Objeto com os filtros iniciais
const initialFilters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  selectedOption: ['population', 'diameter', 'surface_water', 'orbital_period', 'rotation_period'],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};
function filters(state = initialFilters, action) {
  switch (action.type) {
    case FILTRO_NOME:
      return { ...state, filterByName: { name: action.name } };
    case FILTRO_NUMEROS:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.filtro],
        selectedOption: state.selectedOption.filter((option) => option !== action.filtro.column),
      };
    case INICIA_FILTROS:
      return {
        ...state,
        selectedOption: state.selectedOption.filter((option) => option !== action.filtro),
      };
    case REMOVE_FILTRO:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (filtro) => filtro.column !== action.column,
        ),
      };
    case ORDENA_FILTRO:
      return {
        ...state,
        order: action.titulo,
      };
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
