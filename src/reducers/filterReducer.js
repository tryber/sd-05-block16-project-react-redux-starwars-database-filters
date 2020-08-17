import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from './actions';

const initialState = {
  filters: {
    // filtered: [],
    filterByName: {
      name: '',
    },
  },
  filterByNumericValues: [],
};


function filterReducer(state = initialState, action) {
  // console.log( `received action`, action);
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          // filtered: [...action.payload.filter],
          filterByName: {
            name: action.payload.name,
          },
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { ...action.payload },
        ],
      };
    default:
      return state;
  }
}

export default filterReducer;

// esquema de reducer montado tendo como base os exercicios e conteudo do course
