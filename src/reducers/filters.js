import {
  SEARCH_FILTER,
  PART_FILTER,
  PART_VALUE,
  PART_COMPARISON,
  PART_COLUMN,
} from '../actions/index';

const INITIAL_STATE = {
  filterByName: { name: '' },
  columnFilters: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  filterByNumericValues: [],
  newFilter: {
    column: '',
    comparison: '',
    value: '',
  },
};

export default function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filterByName: {
          name: action.payload,
        },
      };
    case PART_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case PART_COMPARISON:
      return {
        ...state, newFilter: { ...state.newFilter, comparison: action.comparison },
      };
    case PART_COLUMN:
      return {
        ...state, newFilter: { ...state.newFilter, column: action.column },
      };
    case PART_VALUE:
      return {
        ...state, newFilter: { ...state.newFilter, value: action.value },
      };
    default:
      return state;
  }
}
