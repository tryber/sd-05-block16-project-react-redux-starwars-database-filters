import { FILTER_NAME_PLANET, FILTER_VALUES, REMOVE_FILTRO, ORDENAR_COLUMNS } from '../actions/actionFilterPlanetsName';

const STATE_INICIAL = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function filterNamePlanet(state, action) {
  return {
    ...state,
    filterByName: {
      name: action.name,
    },
  };
}

function filterValues(state, action) {
  return {
    ...state,
    filterByNumericValues: [
      ...state.filterByNumericValues,
      { column: action.column, comparison: action.comparison, value: action.value },
    ],
  };
}

function removeFiltro(state, action) {
  return {
    ...state,
    filterByNumericValues: [
      ...state.filterByNumericValues
        .filter((filtro) => filtro.column !== action.column),
    ],
  };
}

function ordenarFiltro(state, action) {
  return {
    ...state,
    order: {
      column: action.column, sort: action.sort,
    },
  };
}

const filters = (state = STATE_INICIAL, action) => {
  console.log('action reducer', action);
  switch (action.type) {
    case FILTER_NAME_PLANET:
      return filterNamePlanet(state, action);
    case FILTER_VALUES:
      return filterValues(state, action);
    case REMOVE_FILTRO:
      return removeFiltro(state, action);
    case ORDENAR_COLUMNS:
      return ordenarFiltro(state, action);
    default:
      return state;
  }
};

export default filters;
