import { FILTER_BY_NAME } from '../actions/getFiltersOptions';
import { FILTER_BY_NUMBER } from '../actions/filterByNumericValues';
import { CLEAN_FILTER } from '../actions/cleanFilter';
import { CHOOSE_ORDER } from '../actions/chooseOrder';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
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
          { column: action.column, comparison: action.comparison, value: action.value },
        ),
      };
    case CLEAN_FILTER:
      removed = state.filterByNumericValues.filter((e) => e.column !== action.column);
      return {
        ...state,
        filterByNumericValues: removed,
      };
    case CHOOSE_ORDER:
      return {
        ...state,
        order: { column: action.column, sort: action.sort },
      };
    default:
      return state;
  }
};

export default filters;
