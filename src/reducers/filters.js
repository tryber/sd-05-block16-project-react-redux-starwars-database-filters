import { FILTER_BY_NAME } from '../actions/getFiltersOptions';
import { FILTER_BY_NUMBER } from '../actions/filterByNumericValues';
import { CLEAN_FILTER } from '../actions/cleanFilter';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  columnOptions: ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.filterByName.name },
      };
    case FILTER_BY_NUMBER:
      const newArray = state.columnOptions.filter((e) => e !== action.column);
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.concat(
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ),
        columnOptions: newArray,
      };
    case CLEAN_FILTER:
      const { column } = action;
      const removed = state.filterByNumericValues.filter((e) => e.column !== column);
      return {
        ...state,
        filterByNumericValues: removed,
        columnOptions: state.columnOptions.concat(column),
      };
    default:
      return state;
  }
};

export default filters;
