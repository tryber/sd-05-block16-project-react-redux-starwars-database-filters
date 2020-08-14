import { FILTER_BY_NAME } from '../actions/getFiltersOptions';
import { FILTER_BY_NUMBER } from '../actions/filterByNumericValues';
import { CLEAN_FILTER } from '../actions/cleanFilter';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

let removed = [];

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.filterByName.name },
      };
    case FILTER_BY_NUMBER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.concat(
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ),
      };
    case CLEAN_FILTER:
      removed = state.filterByNumericValues.filter((e) => e.column !== action.column);
      return {
        ...state,
        filterByNumericValues: removed,
      };
    default:
      return state;
  }
};

export default filters;
