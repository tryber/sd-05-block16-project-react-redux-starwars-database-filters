import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from '../actions/actionFilter';

const INITIAL_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.results },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    default:
      return state;
  }
};

export default filters;
