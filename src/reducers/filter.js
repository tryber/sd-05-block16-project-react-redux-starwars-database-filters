import { FILTER_BY_NAME } from '../actions/getFiltersOptions';
import { FILTER_BY_NUMBER } from '../actions/filterByNumericValues';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { name: action.filterByName.name } },
      };
    case FILTER_BY_NUMBER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues:
          [{
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          }],
        },
      };
    default:
      return state;
  }
};

export default filter;
