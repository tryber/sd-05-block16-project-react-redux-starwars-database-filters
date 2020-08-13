import {
  FILTER_BY_NAME, SET_FILTER, SET_COMPARISON, SET_COLUMN, SET_VALUE,
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
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    case SET_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    case SET_COMPARISON:
      return {
        ...state,
        newFilter: { ...state.newFilter, comparison: action.comparison },
      };
    case SET_COLUMN:
      return {
        ...state,
        newFilter: { ...state.newFilter, column: action.column },
      };
    case SET_VALUE:
      return {
        ...state,
        newFilter: { ...state.newFilter, value: action.value },
      };

    default:
      return state;
  }
};

export default filters;
