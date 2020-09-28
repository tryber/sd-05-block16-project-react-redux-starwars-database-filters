import ACTIONS from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};

const reduceFilters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FILTER_NAME:
      return { ...state, filterByName: { name: action.payload } };
    case ACTIONS.COMBINA_ACTIONS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case ACTIONS.REMOVE_FILTRO:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (x) => x.column !== action.payload,
        ),
      }; // Live com PR Zambelli
    case ACTIONS.ASC_DESC:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default reduceFilters;
