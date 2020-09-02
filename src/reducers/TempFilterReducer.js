import { ADD_FILTER, RESET_FILTER_TO_SEND } from '../Actions';

const INITIAL_STATE = {
  filterToSend: {
    column: '',
    comparison: '',
    value: '',
  },
  filtersOptions: {
    numeric: [
      { value: 'population', text: 'População' },
      { value: 'orbital_period', text: 'Período Orbital' },
      { value: 'diameter', text: 'Diâmetro' },
      { value: 'rotation_period', text: 'Periodo de rotação' },
      { value: 'surface_water', text: "Superfície d'Água" },
    ],
    comparison: [
      { value: 'maior que', text: '>' },
      { value: 'menor que', text: '<' },
      { value: 'igual a', text: '=' },
    ],
  },
};

const temporaryFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filterToSend: {
          ...state.filterToSend,
          ...action.payload,
        },
      };
    case RESET_FILTER_TO_SEND:
      return {
        ...state,
        filterToSend: {
          column: '',
          comparison: '',
          value: '',
        },
      };

    default:
      return state;
  }
};

export default temporaryFilter;
