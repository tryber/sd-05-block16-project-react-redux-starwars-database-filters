import { FILTER_NAME_PLANET, FILTER_VALUES, REMOVE_FILTRO } from '../actions/actionFilterPlanetsName';

const STATE_INICIAL = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: '',
    sort: '',
  },
};

const filters = (state = STATE_INICIAL, action) => {
  // console.log('action reducer', action);
  switch (action.type) {
    case FILTER_NAME_PLANET:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    case FILTER_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case REMOVE_FILTRO:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues
            .filter((filtro) => filtro.column !== action.column),
        ],
      };
    default:
      return state;
  }
};

export default filters;
