import { FILTER_BY_NAME } from '../actions/getFiltersOptions';
import { FILTER_BY_NUMBER } from '../actions/filterByNumericValues';
import { CLEAN_FILTER } from '../actions/cleanFilter';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  columnOptions: ['','population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
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
      const newArray = state.columnOptions.filter(e => e !== action.column);
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: state.filters.filterByNumericValues.concat(
            {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
            }
          ),
        },
        columnOptions: newArray,
      };
    case CLEAN_FILTER:
      const { column, comparison, value } = action;
      const removed = state.filters.filterByNumericValues.filter(e => {
        if (column === e.column && comparison === e.comparison && value === e.value) {
          return null;
        }
        return e;
      })
      return {
        filters: {
          filterByName: {
            name: '',
          },
          filterByNumericValues: removed,
        },
        columnOptions: state.columnOptions.concat(column),
      }
    default:
      return state;
  }
};

export default filter;
