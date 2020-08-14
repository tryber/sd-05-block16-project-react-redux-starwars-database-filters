import {
  FILTER_BY_NAME, SET_FILTER, SET_COMPARISON, SET_COLUMN, SET_VALUE, REMOVE_FILTER, SORT_FILTER,
} from '../actions';

const initialState = {
  filterByName: { name: '' },
  columnFilters: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  filterByNumericValues: [],
  newFilter: {
    column: '',
    comparison: '',
    value: '',
  },
  order: { column: 'Name', sort: 'ASC' },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.payload } };
    case SET_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case SET_COMPARISON:
      return { ...state, newFilter: { ...state.newFilter, comparison: action.comparison } };
    case SET_COLUMN:
      return { ...state, newFilter: { ...state.newFilter, column: action.column } };
    case SET_VALUE:
      return { ...state, newFilter: { ...state.newFilter, value: action.value } };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          ({ column }) => column !== action.payload,
        ),
      };
    case SORT_FILTER:
      return { ...state, order: { column: action.payload.column, sort: action.payload.sort } };
    default:
      return state;
  }
};

export default filters;
