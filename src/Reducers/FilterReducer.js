import { FILTER_BY_NAME, RESET_FILTER_BY_NAME } from '../Actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: false,
    },
  },
  filtersOptions: {
    numeric: [
      { value: 'clear_filter', text: 'Coluna' },
      { value: 'population', text: 'População' },
      { value: 'orbital_period', text: 'Período Orbital' },
      { value: 'diameter', text: 'Diâmetro' },
      { value: 'rotation_period', text: 'Periodo de rotação' },
      { value: 'surface_water', text: 'Superfície d\'Água' },
    ],
    comparison: [
      { value: 'clear_filter', text: 'Comparação' },
      { value: 'bigger_than', text: '>' },
      { value: 'less_than', text: '<' },
      { value: 'equal_to', text: '=' },
    ],
  },
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: action.name,
        },
      };
    case RESET_FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: false,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
