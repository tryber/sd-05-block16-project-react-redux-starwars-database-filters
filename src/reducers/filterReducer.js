import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from './actions';


const initialState = {
  filters: {
    filterByName: {
      name: '',
    },
  },
  filterByNumericValues: [],
};


function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          filterByName: {
            name: action.payload,
          },
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          action.payload,
        ],
      };
    default:
      return state;
  }
}

export default filterReducer;

// esquema de reducer montado tendo como base os exercicios e conteudo do course
