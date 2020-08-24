import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES, CLEAR_FILTER } from '../actions';

const INITIALSTATUS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = INITIALSTATUS, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state, filterByName: { name: action.name },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, {
          column: action.column, comparison: action.comparison, value: action.value,
        }],
      };
    case CLEAR_FILTER: // fonte de pesquisa https://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.filter((elementRemove) =>
          elementRemove.column !== action.column,
        )],
      };
    default:
      return state;
  }
}

export default filters;
